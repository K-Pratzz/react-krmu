import React from 'react'
import { useState } from 'react';

const MultiCounter = () => {
  const[count,setCount]   =  useState([0,0])
  const increment=(index)=>{
    setCount([...count.slice(0,index),count[index]+1,...count.slice(index+1)])  
  }
  const decrement=(index)=>{
    setCount([...count.slice(0,index),count[index]-1,...count.slice(index+1)])
  }

return (
    <div>   
        <h1>Counter 1: {count[0]}</h1> 
        <button onClick={()=>increment(0)}>Increment Counter 1</button>
        <button onClick={()=>decrement(0)}>Decrement Counter 1</button>
        <h1>Counter 2: {count[1]}</h1>
        <button onClick={()=>increment(1)}>Increment Counter 2</button>
        <button onClick={()=>decrement(1)}>Decrement Counter 2</button>
    </div>
)
}
export default MultiCounter