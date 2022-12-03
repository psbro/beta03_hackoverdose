import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Banner from "../../assets/banner3.jpg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const Main_components = () => {
  const [active, setactive] = React.useState("");
  const [tableactive, settable] = React.useState("hide");
  return (
    <>
      <Index_Home>
        <img src={Banner} alt="home-image" className="home-img" />
        <div className="img-wrapper"></div>
        <div className="anim-wrapper-one"></div>
        <div className="anim-wrapper-two"></div>
        <div className="anim-wrapper-three"></div>

        <div className="home-content">
          <span>
            <h1 className="main-heading">
              <br />
              AnnaSeva
            </h1>
          </span>
          <span>
            <h1 className="sub-heading">Saving humanity from hunger</h1>
          </span>

          <div className="btn">
            <button className="btn1">Donate Food</button>
            <button className="btn1">Know More</button>
          </div>
        </div>
      </Index_Home>
    </>
  );
};

const Index_Home = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;

  .home-img {
    position: relative;
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 0px 35%;
    object-position: 0px 35%;
    margin: 0;
    padding: 0;

    @media (max-width: 992px) {
      -o-object-position: -30px 35%;
      object-position: -30px 35%;
    }
  }

  .img-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .anim-wrapper-one {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--secondary-color);
    z-index: 2;
  }

  .anim-wrapper-two {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--main-color);
    z-index: 3;
  }

  .anim-wrapper-three {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--white);
    z-index: 4;
  }

  .home-content {
    position: absolute;
    top: 55%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 80%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;

    .btn {
      display: flex;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      width: 50%;
      box-shadow: none;

      .btn1 {
        text-decoration: none;
        border: 3px solid var(--main-color);
        width: 180px;
        height: 50px;
        display: grid;
        place-items: center;
        color: #fff;
        font-size: var(--sub-heading-size);
        font-family: "Saira Condensed", sans-serif;
        margin-left: auto;
        background-color: var(--main-color);
        border-radius: 10px;
        margin: 2rem 0 0 0;

        &:hover {
          opacity: 0.9;
        }
      }
    }

    span {
      position: relative;
      overflow: hidden;
      display: inline-block;

      .sub-heading {
        font-family: "Poppins", sans-serif;
        color: var(--secondary-color);
        text-align: end;
        font-size: 25px;
      }

      .main-heading {
        color: #fff;
        text-align: end;
        font-size: 60px;
      }

      .social {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        margin-top: 2rem;
        gap: 1rem;

        @media (max-width: 992px) {
          margin-top: 1rem;
        }

        .button {
          text-decoration: none;
          border: 3px solid var(--para-text);
          width: 180px;
          height: 50px;
          display: -ms-grid;
          display: grid;
          place-items: center;
          color: var(--white);
          font-size: var(--sub-heading-size);
          font-family: "Saira Condensed", sans-serif;
          margin-left: auto;
          width: 80px;
          height: 50px;
          margin: 0;
          border-radius: 50%;

          @media (max-width: 992px) {
            width: 2.5rem;
            height: 2.5rem;
          }

          .font {
            color: var(--secondary-color);
          }
        }
      }
    }
  }
`;

export default Main_components;
