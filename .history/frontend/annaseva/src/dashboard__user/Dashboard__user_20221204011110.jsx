import React from 'react'
// import Home from "../../src/dashboard__user/pages/home/Home"
import Home from "./pages/home/Home"
import { useNavigate } from 'react-router-dom';

const Dashboard__user = () => {
    const navigate = useNavigate();
    if(localStorage.getItem(userNo)==undefined)
    {
        navigate('/');
    }
    else if(localStorage.getItem(is))
    return (
        <div>
            <Home />
        </div>
    )
}

export default Dashboard__user


