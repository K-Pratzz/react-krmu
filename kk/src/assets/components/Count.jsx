import React from 'react'

const Count = () => {
    var count=0;
    function handleClick(){
    count=count+1;
    console.log(count);

  }
  return (
    <>
    <div>Count:{count}</div>
    <button onClick={handleClick}>click</button>
    </>
  )
}

export default Count