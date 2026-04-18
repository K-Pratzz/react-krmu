import {useState} from 'react'
const Wishlist=()=>{
    const [wishlist,setWishlist]=useState([])


    return (
        <>
        <h1>Wishlist : {wishlist.map((item,index)=>
        <p key={index}>{item}</p>
        )}
        </h1>
        <button onClick={()=>setWishlist([...wishlist,"New Item"])}>Add to Wishlist</button>
        <button onClick={()=>setWishlist(wishlist.slice(0,wishlist.length-1))}>Remove from Wishlist</button>
        </>
    )
}

export default Wishlist