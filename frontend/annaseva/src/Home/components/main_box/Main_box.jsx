import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"

const Main_box = () => {
    return (
        <Current_Event>

        <div class="current-event">
          <h3 class="sub-heading">PICK UP YOUR PENS</h3>
          <h1 id="curr-event-content" class="main-heading">NATIONAL LEVEL WRITING CONTEST<br/>AZURE'22 IS LIVE!</h1>
          <a class="button" href="./notfound.html">REGISTER NOW</a>
        </div>

        </Current_Event>
    )
}

const Current_Event = styled(motion.div)`

  position: relative;
  width: 100%;
  padding: 0 var(--side-margin);
  background-color: #fff;
  color: #fff;

  .current-event{
    position: relative;
  width: 50%;
  min-width: 300px;
  min-height: 300px;
  height: 50vh;
  margin-top: -25vh;
  background-color: var(--white);
  -webkit-box-shadow: 0px 15px 80px -6px rgba(0, 0, 0, 0.2);
          box-shadow: 0px 15px 80px -6px rgba(0, 0, 0, 0.2);
  padding: 2rem 0;
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
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
          background-color: #fff;

    h1{
        text-align: center;
        font-size: calc(var(--heading-size) * 0.5);

        @media(max-width: 992px){
            font-size: calc(var(--heading-size) * 0.6);
        }
    }

    h3{
        text-align: center;
        color: var(--secondary-color);
    }

    .button{
  text-decoration: none;
  border: 3px solid var(--main-color);
  width: 180px;
  height: 50px;
  display: -ms-grid;
  display: grid;
  place-items: center;
  color: var(--white);
  font-size: var(--sub-heading-size);
  font-family: "Saira Condensed", sans-serif;
  margin-left: auto;
  margin: 2rem auto 0 auto;
  background-color: var(--main-color);
    }

    @media(max-width: 992px){
    width: calc(100% - var(--side-margin) * 2);
    left: var(--side-margin);
    }

  }


`
export default Main_box;

