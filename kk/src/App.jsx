import React from 'react'
import Navbar from './Navbar'
import maincomp, { about } from  './assets/components/about'
const App = () => {
  console.log(about(10,3));
  console.log(maincomp(10,3));
  return (
    <>
    <Navbar/>
    <div>This is App component</div>
    </>
  )
}
//rafce
//component first letter is always capital
// <></> react fragement
//why react js object are huge, eberthing changes if we wanna change one thing..also code redundency
//app.css is global if we dont import yet will work
export default App