import React from 'react'
import Navbar from './Navbar'
import maincomp, { about } from  './assets/components/about'
import Count from './assets/components/Count';
import Parent from './propsPassing/Parent';
import IfElseComp from './ConceptComp/IfElseComp';
import UseState from './hooks/UseState';
const App = () => {
  console.log(about(10,3));
  console.log(maincomp(10,3));
  

  return (
    <>
    <Parent />
    <IfElseComp/>
    <UseState/>
    
    </>
  )
}
//rafce
//component first letter is always capital
// <></> react fragement
//why react js object are huge, eberthing changes if we wanna change one thing..also code redundency
//app.css is global if we dont import yet will work
export default App