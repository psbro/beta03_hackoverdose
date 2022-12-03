import React from 'react'
import Home from "./pages/home/Home"
import use

const dashboard = () => {
  useEffect(()=>{
    
    let userNo=localStorage.getItem("userNo")
    let isAdmin=localStorage.getItem("isAdmin")
    if(!userNo)
    {
      navigate("/")
    }
    else if(isAdmin=="No")
    {
      navigate("/dashboard/user")
    }
  
    },[])
  return (
    <div>
      <Home />
    </div>
  )
}

export default dashboard

