import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home";
import Auth from './auth/Auth';
import Dashboard from './dashboard/Dashboard';
import Dashboard__user from './dashboard__user/Dashboard__user';
import axios from 'axios';


const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard/user" element={<Dashboard />} />
        <Route exact path="/dashboard/admin" element={<Dashboard__user />} />
        <Route exact path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
