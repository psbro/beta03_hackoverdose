import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <Main_Navbar style={{ paddingLeft: 0 }}>
      <div className="logo">
        <img
          src={require("../assets/logo.png")}
          alt=""
          style={{ height: "100px", marginTop: "10px" }}
        />
      </div>
      {/* <div class="social" style={{ width: "35%" }}>
        <a
          className="button"
          href="https://www.facebook.com/ibcManit16"
          style={{ marginRight: "25px" }}
        >
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a
          className="button"
          href="https://www.instagram.com/ibc_manit/"
          style={{ marginRight: "25px" }}
        >
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a
          className="button"
          href="https://www.linkedin.com/in/intellect-browsers-consortium-manit-378b001a7/"
          style={{ marginRight: "25px" }}
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          className="button"
          href="https://cognizanttrances.wordpress.com/"
          style={{ marginRight: "25px" }}
        >
          <i class="fab fa-wordpress fa-2x"></i>
        </a>
      </div> */}
      <ul className="nav-links">
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
            GALLERY
          </ScrollLink>
        </li>
        <li id="team-dropdown" className="nav-drop">
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
            Login / Signup
          </Link>
        </li>
      </ul>
    </Main_Navbar>
  );
};

const Main_Navbar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5em;
  background-color: #fff;
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
  -webkit-box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.05) 0px 8px 32px;
  overflow-x: hidden;

  .logo {
    position: relative;
  }

  .nav-links {
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

    li {
      position: relative;

      a {
        text-decoration: none;
        color: var(--main-color);
        font-size: 1.2rem;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        -webkit-transition: opacity 0.2s ease;
        transition: opacity 0.2s ease;
      }

      a:hover {
        opacity: 0.8;
      }

      .blog-btn {
        display: -ms-grid;
        display: grid;
        place-items: center;
        color: var(--white);
        font-size: var(--sub-heading-size);
        font-family: "Saira Condensed", sans-serif;
        margin-left: auto;
        color: var(--white);
        background-color: var(--secondary-color);
        width: 180px;
        height: 40px;
        border: none;
        border-radius: 5px;
      }
    }

    .blog-btn {
      width: 200px;
      height: 50px;
      display: -ms-grid;
      display: grid;
      place-items: center;
      color: var(--white);
      font-size: 1rem;
      font-family: "Saira Condensed", sans-serif;
      margin-left: auto;
      color: #f1f0cc;
      background-color: #8d775f;
      width: 120px;
      height: 40px;
      border: none;
    }
  }
`;

export default Nav;
