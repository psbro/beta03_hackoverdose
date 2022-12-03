import React from 'react'
import styled from 'styled-components'
import photo4 from "../../assets/photo4.jpeg"
import photo5 from "../../assets/photo5.jpeg"
import photo6 from "../../assets/photo6.jpeg"
import { motion } from "framer-motion"

const Aim__components = () => {
    return (
        <>
            <Events>
                <h1 data-aos="fade-up">SERVICES</h1>
                <All_events>
                    <div className="event" data-aos="fade-up">
                        <img
                            src={photo4}
                            alt="event"
                            className="event-img"
                        />
                        <h3 className="sub-heading">AIM</h3>
                        <p className="event-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti iure, ratione et odio dicta necessitatibus voluptate rerum quibusdam fugiat eveniet consequatur? Sed at minus facilis eveniet eum accusantium asperiores.
                        </p>
                        
                    </div>

                    <div className="event" data-aos="fade-up">
                        <img
                            src={photo5}
                            alt="event"
                            className="event-img"
                        />
                        <h3 className="sub-heading">AIM</h3>
                        <p className="event-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti iure, ratione et odio dicta necessitatibus voluptate rerum quibusdam fugiat eveniet consequatur? Sed at minus facilis eveniet eum accusantium asperiores.
                        </p>
                        
                    </div>

                    <div className="event" data-aos="fade-up">
                        <img
                            src={photo6}
                            alt="event"
                            className="event-img"
                        />
                        <h3 className="sub-heading">AIM</h3>
                        <p className="event-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corrupti iure, ratione et odio dicta necessitatibus voluptate rerum quibusdam fugiat eveniet consequatur? Sed at minus facilis eveniet eum accusantium asperiores.
                        </p>
                        
                    </div>

                    
                </All_events>

            </Events>
        </>
    )
}

const Events = styled(motion.div)`
  position: relative;
  width: 100%;
  padding: 5% var(--side-margin);

  h1{
  position: relative;
  text-align: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 auto;

  &::after{
    content: "";
  position: absolute;
  top: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  width: 50%;
  height: 100%;
  border-bottom: 3px solid var(--secondary-color);
  }
  }

`

const All_events = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
}

  .event{
    
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  gap: 1rem;
  margin-top: 5rem;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;


   .event-img{
    width: 100%;
  aspect-ratio: 4/3;
  height: 200px;
  border-radius: 5px;
  -webkit-box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
   }

   h3{
    font-size: 30px;
  text-align: center;
  color: var(--main-color);
  margin-top: 20px;
   }

   .event-desc{
    font-size: 18px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  word-wrap: break-word;
   }

   .event-ref{
 text-decoration: none;
  text-align: center;
  font-family: "Saira Condensed", sans-serif;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 18px;
   }
  }


`

export default Aim__components;

