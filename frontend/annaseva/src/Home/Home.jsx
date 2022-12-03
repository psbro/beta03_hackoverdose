import React from 'react'
import './Home.scss'
import Nav from './components/Nav'
import Main from './pages/Main'
import Aim from './pages/Aim'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
import About from './pages/About'

const Home = () => {
    return (
        <>
            <Nav />
            <Main />
            <Aim />
            <Gallery />
            <Footer />
        </>
    )
}

export default Home
