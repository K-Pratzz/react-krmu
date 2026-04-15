import React from 'react'
import { useState } from 'react';

const MultiCounter = () => {
    const [count,setCount]=useState([0,0]);
    //const [num,setNum]=useState(0);
    const inc=(index)=>{
        setCount((prev)=>{
            const newv=[...count,count[index]+1]
            return newv 

        })
    }
  return (
     <>
     {count.map((counter,index)=>(
        <div>
            <h1>count : {counter}</h1>
            <button onClick={()=>inc(index)}></button>
        </div>
     ))}
        // <h1>count : {count}</h1>
        // <button onClick={()=>setCount(count[0]+1)}>Count1</button>
        {/* <h1>Num : {num}</h1> */}
        {/* <button onClick={()=>setNum(count[0]+1)}>Count2 </button> */}
       
    </>
  )
}

export default MultiCounter