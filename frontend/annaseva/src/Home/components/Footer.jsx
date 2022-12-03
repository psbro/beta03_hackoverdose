import React from 'react'
import styled from "styled-components"
import { motion } from "framer-motion"
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsWordpress } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
    return (
      <>
        <Foot_Details>
          <div className="footer_container">
            <div className="right_footer">
              <span>
                <h1>GET LATEST UPDATES</h1>
              </span>

              <div className="iform">
                <form>
                  <input
                    type="email"
                    id="sub_email"
                    placeholder="YOUR E-MAIL"
                    style={{ opacity: "1" }}
                  />
                  <button
                    type="submit"
                    id="sub_submit"
                    style={{ opacity: "1" }}
                  >
                    SUBSCRIBE
                  </button>
                </form>

                <div className="social">
                  <li>
                    <a href="#">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsWordpress />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsTwitter />
                    </a>
                  </li>
                </div>
              </div>
            </div>

            <div className="left_footer">
              <div className="content">
                <div className="adress">
                  <h3>ANNASEVA</h3>
                  <p>
                    Local governments and nonprofits can manage food recovery
                    programs in their community through the Waste No Food app.
                    We’ll provide the technology infrastructure to enable
                    real-time food donation. Waste No Food enables the food
                    industry to donate excess food to hungry people
                  </p>
                </div>

                <div className="contact">
                  <h3>CONTACT</h3>
                  <div className="link">
                    <FiMail
                      style={{
                        color: "#FFF",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                      }}
                    />
                    <a href="#">annaseva@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="quicklinks">
                <h3>QUICK LINKS</h3>
                <div className="main_links">
                  <ul>
                    <li>
                      <a href="#">ABOUT</a>
                    </li>
                    <li>
                      <a href="#">GALLERY</a>
                    </li>
                    <li>
                      <a href="#">PREDICT</a>
                    </li>
                    <li>
                      <a href="#">CONTACT</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Foot_Details>
      </>
    );
}

const Foot_Details = styled(motion.div)`
width: 100%;
min-height: 80vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
flex-wrap: wrap;
background-color: #DCE1E3;
position: relative;
top: 11rem;

.footer_container{
 background-color: var(--main-color);
 box-shadow: 0px 15px 80px -6px rgb(0 0 0 / 20%);
 overflow: hidden;
 background-color: var(--main-color);
 width: 80%;
 min-height: 750px;
 position: relative;
 bottom: 5rem;
 display: flex;
 justify-content: space-around;
 align-items: center;

 @media(max-width: 900px){
    flex-direction: column;

   
 }


 .right_footer{
    /* border: 3px solid white;
     */
    display: flex;
    flex-direction: column;
    min-height: 600px;
    width: 40%;
    position: relative;
    top: 5rem;
    
    

    @media(max-width: 900px){
    width: 80%;
 }

   h1{
    font-size: 36px;
    font-weight: 700;
    color: #fff;
   }

   .iform{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    /* border: 3px solid white; */
    margin-top: 2rem;
    height: 21rem;

    form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    

    #sub_email{
       width: 80%;
       height: 3rem;
       border-radius: 5px;
       padding: 0.5rem;
       box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
       font-size: 18px;
       font-family: "Poppins", sans-serif;
       transition: all 0.3s ease;

       @media(max-width: 400px){
        width: 100%;
        font-size: 15px;
       }
    }

    #sub_submit{
        background-color: #fdc04f;
        width: 180px;
        display: grid;
        place-items: center;
        font-size: var(--sub-heading-size);
        font-family: "Saira Condensed", sans-serif;
        margin: 0;
        border-radius: 5px;
        height: 3rem;
        color: white;
        box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
        cursor: pointer;

        @media(max-width: 400px){
        width: 100%;
        font-size: 15px;
       }
    }

    .social{
        display: flex;
        gap: 2rem;
        /* align-items: center; */

        @media(max-width: 360px){
            gap: 1.3rem;
        }
        

        li{
            list-style: none;
        }
        li a{
            text-decoration: none;
            font-size: 2rem;
            color: var(--secondary-color);

            @media(max-width: 360px){
                font-size: 1.5rem;
            }
        }

        li a:hover{
            opacity: 0.8;
            
        }
    }
   }
 }

 .left_footer{
    /* border: 3px solid white; */
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    min-height: 600px;
    width: 50%;
    position: relative;
    top: 3rem;

    .content{
     /* border: 3px solid white; */
     height: 500px;
     width: 300px;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     flex-wrap: wrap;

     .adress{
        /* border: 3px solid white; */
        position: relative;
        bottom: 3rem;
     }

     .contact{
        /* border: 3px solid white; */
        min-height: 100px;
        position: relative;
        bottom: 6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        @media(max-width: 433px){
           
                bottom: 4rem;
           
        }

        @media(max-width: 337px){
           
           bottom: 3rem;
      
   }
        

        .link{
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .link a{
            text-decoration: underline;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            text-transform: uppercase;
            font-family: 'Roboto', sans-serif
            
        }

        @media(max-width: 365px){
            .link a{
                font-size: 0.8rem;
            }
        }
     }
     
     h3{
    font-size: 24px;
    font-weight: 700;
    color: var(--secondary-color);
     }

     p{
    font-size: 18px;
    font-weight: 400;
    color: var(--para-text);
     }


    }

    .quicklinks{
     /* border: 3px solid white; */
     height: 500px;
     width: 250px;

     h3{
     font-size: 24px;
    font-weight: 700;
    color: var(--secondary-color);
     }

     .main_links ul li{
     list-style: none;

     a{
        text-decoration: none;
        font-size: 1.5rem;
        color: #fff;
        font-family: "Poppins", sans-serif;
        display: inline-block;
        font-weight: 400;
     }
     }

     
    }

    @media(max-width: 900px){
    width: 80%;
     }
 }

}


`

const Credits = styled(motion.div)`
height: 20px;
width: 80%;
position: relative;
bottom: 3rem;
display: flex;
flex-direction: column;
align-items: center;
h6{
    font-weight: lighter;
    font-size: 1.3rem;
    font-family: "Poppins", sans-serif;
    #team{
    font-weight: bolder;
    }
}
`

export default Footer;
