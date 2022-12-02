import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home/Home";
import Auth from './auth/Auth';
import Dashboard from './dashboard/Dashboard';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
