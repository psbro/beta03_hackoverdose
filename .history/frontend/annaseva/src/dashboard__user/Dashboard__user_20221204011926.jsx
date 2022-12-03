import React from 'react'
// import Home from "../../src/dashboard__user/pages/home/Home"
import Home from "./pages/home/Home"
import { useNavigate } from 'react-router-dom';
import { isAdmin } from '@firebase/util';



const Dashboard__user = () => {
const navigate = useNavigate();

  let userNo=localStorage.getItem("userNo")
  let isAdmin=localStorage.getItem("isAdmin")
  if(!user)

    
    return (
        <div>
            <Home />
        </div>
    )
}

export default Dashboard__user


