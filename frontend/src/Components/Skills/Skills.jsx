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
          </div>
          <div className="img-container">
            <img src={reactnative}></img>
          </div>
          <div className="img-container">
            <img src={tailwindcss}></img>
          </div>
          <div className="img-container">
            <img src={css}></img>
          </div>
          
          <div className="img-container">
            <img src={figma}></img>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={nodejs}></img>
          </div>
          <div className="img-container">
            <img src={expressjs}></img>
          </div>
          <div className="img-container">
            <img src={javascript}></img>
          </div>
          <div className="img-container">
            <img src={mongodb}></img>
          </div>
          <div className="img-container">
            <img src={sql}></img>
          </div>
        </div>
        <div className="skills">
          <div className="img-container">
            <img src={firebase}></img>
          </div>
          <div className="img-container">
            <img src={postman}></img>
          </div>
          <div className="img-container">
            <img src={aws}></img>
          </div>
          <div className="img-container">
            <img src={java}></img>
          </div>
          <div className="img-container">
            <img src={python}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
