import React from 'react'
// import Home from "../../src/dashboard__user/pages/home/Home"
import Home from "./pages/home/Home"
import { useNavigate } from 'react-router-dom';
import { isAdmin } from '@firebase/util';
const navigate = useNavigate();


const Dashboard__user = () => {
  let userNo=localStorage.getItem
    
    return (
        <div>
            <Home />
        </div>
    )
}

export default Dashboard__user


