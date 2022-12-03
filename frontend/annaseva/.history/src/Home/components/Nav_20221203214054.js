import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <Main_Navbar>

            <div className="logo">

            </div>

            <ul className="nav-links">
                <li><a className="scroll" href="#">ABOUT</a></li>
                <li><a href="#">GALLERY</a></li>
                <li id="team-dropdown" className="nav-drop"><a>TEAM</a></li>
                <li><a className="scroll" href="#">CONTACT</a></li>
                <li><Link className="blog-btn" to="auth">Login / signup</Link></li>
            </ul>

        </Main_Navbar>
    )
}

const Main_Navbar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5em;
  background-color: #1B2430;
  z-index: 999;
  padding: 0 calc(var(--side-margin) / 2);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
          box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  overflow-x: hidden;

  .logo{
    position: relative;
  }

  .nav-links{
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  gap: 2rem;

  li{
    position: relative;

    a{
  text-decoration: none;
  color: var(--main-color);
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  -webkit-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease;  
    }

    a:hover{
        opacity: 0.8;
    }

    .blog-btn{
  width: 180px;
  height: 50px;
  display: -ms-grid;
  display: grid;
  place-items: center;
  color: var(--white);
  font-size: var(--sub-heading-size);
  font-family: "Saira Condensed", sans-serif;
  margin-left: auto;
  color: var(--white);
  background-color: var(--secondary-color);
  width: 120px;
  height: 40px;
  border: none;
    }

  }

  }



`

export default Nav;

