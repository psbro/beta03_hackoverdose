import React from "react";
import styled from "styled-components";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import { motion } from "framer-motion";

const Gallery__components = () => {
  return (
    <>
      <Gallery>
        <h1 class="heading" data-aos="fade-up">
          Our Aim
        </h1>
        <div class="gallery-container">
          <img
            data-aos="fade-up"
            src={photo1}
            alt="gallery"
            className="gallery-img"
          />
          <img
            data-aos="fade-up"
            src={photo2}
            alt="gallery"
            className="gallery-img"
          />
          <img
            data-aos="fade-up"
            src={photo3}
            alt="gallery"
            className="gallery-img"
          />
        </div>
        <a href="/gallery.html" class="gallery-ref" data-aos="fade-up">
          VIEW MORE
        </a>
      </Gallery>
    </>
  );
};

const Gallery = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 5% var(--side-margin);

  h1 {
    position: relative;
    text-align: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 auto;

    &::after {
      position: relative;
      text-align: center;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      margin: 0 auto;
    }
  }

  .gallery-container {
    width: 100%;
    display: -ms-grid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-top: 5rem;

    @media screen and (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 992px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .gallery-img {
      width: 100%;
      aspect-ratio: 4/3;
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
      border-radius: 5px;
    }
  }

  .gallery-ref {
    text-decoration: none;
    border: 3px solid var(--main-color);
    width: 180px;
    height: 50px;
    display: -ms-grid;
    display: grid;
    place-items: center;
    color: #fff;
    font-size: var(--sub-heading-size);
    font-family: "Saira Condensed", sans-serif;
    margin-left: auto;
    background-color: var(--main-color);
    -webkit-box-shadow: 0px 10px 30px 0px rgba(252, 163, 17, 0.5);
    box-shadow: 0px 10px 30px 0px rgba(252, 163, 17, 0.5);
    margin: 5rem auto 0 auto;
  }
`;

export default Gallery__components;
