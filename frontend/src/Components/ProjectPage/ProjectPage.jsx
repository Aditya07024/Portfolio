import React from "react";
import "./ProjectPage.css";3
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import image2 from "../../assets/image2.png"
const ProjectPage = () => {
  return (
    <div className="project-page" id="project">
      <div className="my-work">
        <h1>My Work</h1>
      </div>
      <div className="slide-div">
        <div className="left-div">
          <div className="first-project">
            <div className="project-image"><a href="https://techmedix.onrender.com/"><img src={project1} alt=""></img></a></div>
            <div className="project-line">
              <div className="waste-div"></div>
              <div className="line"></div>
            </div>
          </div>
          <div className="more-text">
            <div className="text1"><h2>"More</h2></div>
            <div className="text2"><h3>in Development"</h3></div>
          </div>
        </div>
        <div className="center-div"></div>
        <div className="right-div">
          <div className="second-project">
            <div className="line1"></div>
            <div className="project-image"><img src={project2} alt=""></img></div>
          </div>
          <div className="more-text time2">
            <div className="text1"><h2>"More</h2></div>
            <div className="text2"><h3>in Development"</h3></div>
          </div>
          <div className="more-image">
            <div className="image"><img src={image2} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
