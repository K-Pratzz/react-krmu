import React from 'react'
import Child from './Child'

const Parent = () => {
    const name="kPratzz"
    function Alert(){
        alert("hello");
    }
  return (
    <>
    <div>Parent : {name}</div>
    <Child n={name} alert={Alert}/>
    </>
  )
}

export default Parent