import React from "react";
import "./Home.scss";
import Nav2 from "./components/Nav2";
import Main from "./pages/Main";
import Aim from "./pages/Aim";
import Gallery from "./pages/Gallery";
import Predictor from "./pages/Predictor";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <>
      <Nav2 />
      <Main />
      <Element id="section1" name="section1">
        <Aim />
      </Element>
      <Element id="section2" name="section2">
        <Gallery />
      </Element>
      <Element id="section3" name="section3">
        <Predictor />
      </Element>
      <Element id="section4" name="section4">
        <Footer />
      </Element>
    </>
  );
};

export default Home;
