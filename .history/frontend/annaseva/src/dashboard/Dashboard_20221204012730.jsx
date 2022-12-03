import React from 'react'
import Home from "./pages/home/Home"
import { useEffect } from 'react'
const navigate = useNavigate();


const dashboard = () => {
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

