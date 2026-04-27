import React, {useEffect,useState} from 'react';
const DataFetching=()=>{
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1').then((res)=>res.json()).then((json)=>{
            setData(json);
            setLoading(false);
        });

    });
},[]
