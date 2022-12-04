import React, { useState } from "react";
import "./nav2.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Nav2 = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={Logo} alt="" className="img" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <ScrollLink
                className="scroll"
                to="section1"
                spy={true}
                smooth={true}
                duration={500}
              >
                ABOUT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="section2" spy={true} smooth={true} duration={500}>
                OUR AIM
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="section3" spy={true} smooth={true} duration={500}>
                PREDICT
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                className="scroll"
                to="section4"
                spy={true}
                smooth={true}
                duration={500}
              >
                CONTACT
              </ScrollLink>
            </li>
            <li>
              <Link className="blog-btn" to="auth">
                LOGIN / SIGNUP
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Nav2;
