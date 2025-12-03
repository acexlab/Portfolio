import React, { useEffect, useRef } from 'react'

export default function ShaderBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', { antialias: true })
    if (!gl) return

    // Set canvas size with device pixel ratio for clarity
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Vertex shader
    const vertexShader = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Enhanced fragment shader with more vibrant colors
    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        
        // Create fixed animated flowing waves across entire screen
        float wave1 = sin(uv.x * 4.0 + time * 0.5) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 4.0 - time * 0.3) * 0.5 + 0.5;
        float wave3 = sin((uv.x + uv.y) * 3.0 + time * 0.4) * 0.5 + 0.5;
        
        // Create dynamic color mixing
        vec3 color = vec3(0.0);
        
        // Base layers with smooth color transitions
        color += vec3(0.1, 0.05, 0.2) * wave1;
        color += vec3(0.05, 0.1, 0.3) * wave2;
        color += vec3(0.15, 0.08, 0.25) * wave3;
        
        // Add some chromatic aberration
        color.r += sin(time * 0.3 + uv.y * 5.0) * 0.1;
        color.g += cos(time * 0.2 + uv.x * 5.0) * 0.1;
        color.b += sin((uv.x + uv.y) * 3.0 + time) * 0.1;
        
        // Normalize and add brightness
        color = normalize(color) * 0.5;
        color += vec3(0.05, 0.03, 0.1);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `

    // Compile shader
    const compileShader = (source, type) => {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader))
      }
      return shader
    }

    const vs = compileShader(vertexShader, gl.VERTEX_SHADER)
    const fs = compileShader(fragmentShader, gl.FRAGMENT_SHADER)

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    // Create full-screen quad
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    )

    const positionLocation = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    // Get uniform locations
    const resolutionLocation = gl.getUniformLocation(program, 'resolution')
    const timeLocation = gl.getUniformLocation(program, 'time')

    // Animation loop
    let startTime = Date.now()
    let frameId
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000
      
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height)
      gl.uniform1f(timeLocation, elapsed)
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        display: 'block',
      }}
    />
  )
}
