// src/pages/AntigravityPage.jsx

import React from 'react'
import Antigravity from '../../../features/Animations/Antigravity/Antigravity' 

const AntigravityPage = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        background: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '400px',
          position: 'relative',
        }}
      >
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>
    </div>
  )
}

export default AntigravityPage