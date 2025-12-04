import React from "react";
import "./ProjectPage.css";
3;
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import image2 from "../../assets/image2.png";
import zerodha from "../../assets/zerodha.png";
const ProjectPage = () => {
  return (
    <div className="project-page" id="project">
      <div className="my-work">
        <h2>Featured Projects</h2>
      </div>
      <div className="slide-div">
        <div className="left-div">
          <div className="first-project">
            <div className="project-image">
              <a
                href="https://techmedix.onrender.com/"
                title="TechMedix - Full-Stack Healthcare Platform"
              >
                <img
                  src={project1}
                  alt="TechMedix - Healthcare platform built with MERN stack"
                />
              </a>
            </div>
            <div className="project-line">
              <div className="waste-div"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="first-project">
            <div className="project-image">
              <a
                href="https://zerodha-frontend-uizo.onrender.com"
                title="Zerodha Clone - Trading Platform Frontend"
              >
                <img
                  src={zerodha}
                  alt="Zerodha Clone - Full-stack trading platform project"
                />
              </a>
            </div>
            <div className="project-line">
              <div className="line"></div>
              <div className="waste-div"></div>
            </div>
          </div>

          <div className="more-text">
            <div className="text1">
              <h3>"More Projects</h3>
            </div>
            <div className="text2">
              <p>in Development"</p>
            </div>
          </div>
        </div>
        <div className="center-div"></div>
        <div className="right-div">
          <div className="second-project">
            <div className="line1"></div>
            <div className="project-image">
              <img
                src={project2}
                alt="React Native Mobile App - Cross-platform application project"
              />
            </div>
          </div>
          <div className="more-text time2">
            <div className="text1">
              <h3>"More Projects</h3>
            </div>
            <div className="text2">
              <p>in Development"</p>
            </div>
          </div>
          <div className="more-image">
            <div className="image">
              <img
                src={image2}
                alt="UI/UX Design mockup - Creative design project showcase"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
