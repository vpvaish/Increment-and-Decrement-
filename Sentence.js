import React, { useState } from 'react'

export default function Sentence() {

    const [x, set] = useState(2) //hook
    
    function double(){ 
        set(x*2);
    }

  return (
    <div>
      <h1>
        Hello Your Value is : {x}
      </h1>
      <button onMouseOver={double} >
      <h1>double of number is</h1>
      </button>    
    </div>
  )
}
