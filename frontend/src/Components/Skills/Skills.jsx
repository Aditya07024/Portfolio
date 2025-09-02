import React from "react";
import "./Skills.css";
import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import tailwindcss from "../../assets/tailwindcss.png";
import css from "../../assets/css.png";
import reactnative from "../../assets/reactnative.png";
import nodejs from "../../assets/nodejs.png";
import expressjs from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";
import sql from "../../assets/sql.png";
import figma from "../../assets/figma.png";
import firebase from "../../assets/firebase.png";
import postman from "../../assets/postman.png";
import python from "../../assets/python.png";
import java from "../../assets/java.png";
import aws from "../../assets/aws.png";
import socket from "../../assets/Socket-io.svg"
import websockets from "../../assets/images.png"
import jwt from "../../assets/jwt-flower.webp"
const Skills = () => {
  return (
    <div className="skills-div" id="skills">
      <div className="Heading-div">
        <h1>My Skills</h1>
      </div>
      <div className="main-sec">
        <div className="skills">
          <div className="img-container">
            <img src={react}></img>
            <p>React</p>
          </div>
          <div className="img-container">
            <img src={reactnative}></img>
            <p>React Native</p>
          </div>
          <div className="img-container">
            <img src={tailwindcss}></img>
            <p>Tailwind CSS</p>
          </div>
          <div className="img-container">
            <img src={css}></img>
            <p>CSS</p>
          </div>
          
          <div className="img-container">
            <img src={figma}></img>
            <p>Figma</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={nodejs}></img>
            <p>Node.js</p>
          </div>
          <div className="img-container">
            <img src={expressjs}></img>
            <p>Express</p>
          </div>
          <div className="img-container">
            <img src={javascript}></img>
            <p>JavaScript</p>
          </div>
          <div className="img-container">
            <img src={mongodb}></img>
            <p>MongoDB</p>
          </div>
          <div className="img-container">
            <img src={sql}></img>
            <p>SQL</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={firebase}></img>
            <p>Firebase</p>
          </div>
          <div className="img-container">
            <img src={postman}></img>
            <p>Postman</p>
          </div>
          <div className="img-container">
            <img src={aws}></img>
            <p>AWS</p>
          </div>
          <div className="img-container">
            <img src={java}></img>
            <p>Java</p>
          </div>
          <div className="img-container">
            <img src={python}></img>
            <p>Python</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={socket}></img>
            <p>Socket.io</p>
          </div>
          <div className="img-container">
            <img src={websockets} style={{borderRadius:"50%"}}></img>
            <p>WebSockets</p>
          </div>
          <div className="img-container">
            <img src={jwt}></img>
            <p>JWT</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Skills;
