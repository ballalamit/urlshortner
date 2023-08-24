
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function Redirectedurl() {

   let {shorturl}=  useParams();
   const [url, setUrl] = useState("");

   const redirect = async () =>{
        const response =  await axios.get(`http://localhost:8000/url/${shorturl}`)
        console.log(response.data.fullUrl)
        setUrl(response.data.fullUrl);
        window.location.href = response.data.fullUrl;

    }
    useEffect(()=>{
        redirect();
    },[shorturl])

  return (
    <div>
       
    </div>
  )
}

export default Redirectedurl