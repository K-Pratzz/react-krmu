import React from 'react'
import { useState } from 'react';
const UseState = () => {
  const [count, setCount] = useState(0);
  const [dec,setDec]=useState(10);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev)=>prev+1)}>
        Increment
      </button>
      <p>Count d : {dec}</p>
      <button onClick={() => setDec(dec - 1)}>
        Decrement
      </button>
      <button onClick={()=> {setCount(0); setDec(10);}}>reset</button>
    </div>
  )
}
export default UseState