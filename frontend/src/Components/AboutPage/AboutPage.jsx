import React from "react";
import "./AboutPage.css";
import image from "../../../src/assets/image.png"

const AboutPage = () => {
  return (
    <div className="about-div">
      <div className="about-me">
        <div className="about">About</div>
        <div className="me">ME.</div>
      </div>
      <hr />
      <div className="container">
        <div className="row1">
          <div className="item1">
            <div className="text-item">
              <h2>Background</h2>
              <p>
                I’m a Computer Science graduate with a passion for web and app
                development, as well as design. My curiosity for tech led me to
                explore full-stack development and UI/UX design through hands-on
                projects, bootcamps, and seminars.
              </p>
            </div>
            <div className="box-creative">
              <img src={image}></img>
            </div>
          </div>
          <div className="item2">
            <div className="item">
              <h2>Expertise</h2>
              <p>
                I build fast, scalable, and user-friendly web and mobile apps.
                My work combines strong frontend skills with robust backend
                logic and creative UI/UX design.
              </p>
            </div>
            <div className="item">
              <h2>Approach</h2>
              <p>
                Clean, maintainable code and thoughtful design. I focus on
                understanding user needs, planning effectively, and delivering
                on time.
              </p>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="item3">
            <h2>Goals</h2>
            <p>
              My aspiration is to continuously enhance my professional
              development as a developer, engaging in challenging projects and
              actively contributing to the technological community. Having
              recently learned app development and design skills, I am excited
              to apply these new competencies in real-world projects. I am
              consistently enthusiastic about acquiring new technologies and
              exploring the boundaries of what is feasible in web development
              and app design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
