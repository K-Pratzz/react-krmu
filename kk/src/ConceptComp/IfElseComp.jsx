import React from 'react'

const IfElseComp = () => {
    const isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </div>
  )
}

export default IfElseComp