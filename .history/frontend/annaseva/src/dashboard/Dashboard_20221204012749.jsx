import React from 'react'
import Home from "./pages/home/Home"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



const dashboard = () => {
const navigate = useNavigate();

  useEffect(()=>{
    
    let userNo=localStorage.getItem("userNo")
    let isAdmin=localStorage.getItem("isAdmin")
    if(!userNo)
    {
      navigate("/")
    }
  
    },[])
  return (
    <div>
      <Home />
    </div>
  )
}

export default dashboard

