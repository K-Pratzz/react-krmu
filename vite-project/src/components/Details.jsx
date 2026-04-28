import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Data from '../Data'

const Details = () => {
    const {id}=useParams()
    const navigate=useNavigate()

    const post = Data.find((item)=>item.id===parseInt(id));
    console.log(post,"deatils-post-line9");

    if(!post){
        alert("post not found")
    }

  return (
    <>
    <button onClick={()=>navigate(-1)}>Go Back</button>
    <div>Details</div>

    <h1>{post.title}</h1>
    <img src={post.img_url} alt="" />
    <p>{post.description}</p>
    </>

  )
}

export default Details