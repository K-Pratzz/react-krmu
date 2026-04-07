import React from 'react'

const Child = ({n,alert}) => {
  return (
    <>
        <div>Child: {n}</div>
        <button onClick={alert}>Alert</button>
    </>
  )
}

export default Child