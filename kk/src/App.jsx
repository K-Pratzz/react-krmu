import React from 'react'
import Navbar from './Navbar'
import maincomp, { about } from  './assets/components/about'
import Count from './assets/components/Count';
import Parent from './propsPassing/Parent';
import IfElseComp from './ConceptComp/IfElseComp';
import UseState from './hooks/UseState';
import MultiCounter from './hooks/MultiCounter';
import Login from './hooks/Login';
import Theme from './hooks/Theme';
import Name from './hooks/Name';
import Todo from './hooks/Todo';
import Cart from './hooks/Cart';
import Like from './hooks/Like';
import Wishlist from './hooks/Wishlist';
const App = () => {
  console.log(about(10,3));
  console.log(maincomp(10,3));
  

  return (
    <>
    <Wishlist/>
    </>
  )
}
//rafce
//component first letter is always capital
// <></> react fragement
//why react js object are huge, eberthing changes if we wanna change one thing..also code redundency
//app.css is global if we dont import yet will work
export default App