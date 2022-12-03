import React from 'react'
import Distanceapi from './components/distanceapi/Distanceapi'
import Home from "./pages/home/Home"

const dashboard = () => {
  return (
    <div>
      <Home />
      <Distanceapi />
    </div>
  )
}

export default dashboard

