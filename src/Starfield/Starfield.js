import React from 'react'
 
import StarfieldAnimation from 'react-starfield-animation'
 
function Starfield() {
  return (
    <StarfieldAnimation
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default Starfield;