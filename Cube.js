import React, { useState } from 'react'

// Using Props

export default function Cube() {
 
  const [cube2, seSome] = useState(2);
 
  function cube1(){
    seSome(cube2*cube2*cube2)
  }
 
  return (
    <div>
      <h1>
          " Find the cube " + {cube2}
      </h1>

      <button onClick={cube1}>submit</button>
    </div>
  )
}
