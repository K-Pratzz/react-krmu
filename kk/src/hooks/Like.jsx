import {useState} from 'react'
const Like=()=>{
    const [like,setLike]=useState(false)
    return (
        <>
        <p>{like?"❤️":"🤍"}</p>
        <button onClick={()=>setLike(!like)}>{like?"Unlike":"Like"}</button>
        </>
    )
}
export default Like