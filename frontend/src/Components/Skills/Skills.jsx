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
// import java from "../../assets/java.png";
import aws from "../../assets/aws.png";
import socket from "../../assets/Socket-io.svg";
import websockets from "../../assets/images.png";
import jwt from "../../assets/jwt-flower.webp";
import typescript from "../../assets/typescript.svg";
import nextjs from "../../assets/nextjs.jpeg";
const Skills = () => {
  return (
    <div className="skills-div" id="skills">
      <div className="Heading-div">
        <h1>My Skills</h1>
      </div>
      <div className="main-sec">
        <div className="skills">
          <div className="img-container">
            <img src={react} alt="ReactJS" />
            <p>ReactJS</p>
          </div>
          <div className="img-container">
            <img src={nextjs} alt="NextJS" />
            <p>NextJS</p>
          </div>
          <div className="img-container">
            <img src={tailwindcss} alt="Tailwind CSS" />
            <p>Tailwind CSS</p>
          </div>
          <div className="img-container">
            <img src={css} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className="img-container">
            <img src={figma} alt="Figma" />
            <p>Figma</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={nodejs} alt="Node.js" />
            <p>Node.js</p>
          </div>
          <div className="img-container">
            <img src={expressjs} alt="Express" />
            <p>Express</p>
          </div>
          <div className="img-container">
            <img src={javascript} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="img-container">
            <img src={typescript} alt="TypeScript" />
            <p>TypeScript</p>
          </div>
          <div className="img-container">
            <img src={python} alt="Python" />
            <p>Python</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={firebase} alt="Firebase" />
            <p>Firebase</p>
          </div>
          <div className="img-container">
            <img src={postman} alt="Postman" />
            <p>Postman</p>
          </div>
          <div className="img-container">
            <img src={aws} alt="AWS" />
            <p>AWS</p>
          </div>
          <div className="img-container">
            <img src={mongodb} alt="MongoDB" />
            <p>MongoDB</p>
          </div>
          <div className="img-container">
            <img src={sql} alt="SQL" />
            <p>SQL</p>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={socket} alt="Socket.io" />
            <p>Socket.io</p>
          </div>
          <div className="img-container">
            <img
              src={websockets}
              style={{ borderRadius: "50%" }}
              alt="Websockets"
            />
            <p>Websockets</p>
          </div>
          <div className="img-container">
            <img src={jwt} alt="JWT" />
            <p>JWT</p>
          </div>
          <div className="img-container">
            <img src={reactnative} alt="React Native" />
            <p>React Native</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
