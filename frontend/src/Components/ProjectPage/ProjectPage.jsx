import React, { useState } from "react";
import "./ProjectPage.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import image2 from "../../assets/image2.png";
import zerodha from "../../assets/zerodha.png";
import webd from "../../assets/webd.png";
import mobiled from "../../assets/mobiled.png";
import extensiond from "../../assets/extensiond.png";
import p3 from "../../assets/p-3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
const ProjectPage = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (name) => setActiveProject(name);
  const closeProject = () => setActiveProject(null);

  const projectData = {
    "Web Apps": [
      {
        title: "TechMedix",
        description:
          "Full-Stack Medicine Management and Wellness Platform. Built a scalable healthcare system for intelligent medicine management and patient adherence. Implemented OCR-based prescription extraction, drug interaction detection, real-time price comparison engine, automated adherence scheduling, and RBAC authentication. Optimized PostgreSQL queries (40% API performance improvement) and developed modular REST APIs for healthcare service integration.",
        image: project1,
        youtube: "#",
        github: "https://github.com/Aditya07024/TechMedix",
        site: "https://techmedix.onrender.com/",
      },
      {
        title: "VedicAi – Intelligent Vedic Astrology Platform",
        description:
          "An AI-powered Vedic astrology platform that generates detailed Kundli (birth charts), detects doshas (Mangal, Kaal Sarp, Pitra), calculates Vimshottari Dasha & Panchang, and provides intelligent interpretations using Google Gemini API. Built with Streamlit, pyswisseph (Swiss Ephemeris), PostgreSQL (Neon), and deployed on Render.",
        image: p4,
        youtube: "#",
        github: "https://github.com/Aditya07024/VedicAi",
        site: "https://vedicai.onrender.com/",
      },
      {
        title: "Zerodha Clone",
        description: "A full-featured stock trading platform clone inspired by Zerodha. Built an interactive dashboard with real-time market data visualization, responsive trading panels, portfolio tracking UI, watchlist management, and dynamic chart rendering. Focused on clean component architecture, state management, and pixel-perfect UI replication.",
        image: zerodha,
        youtube: "#",
        github: "#",
        site: "#",
      },
      {
        title: "Kyara Beverages – Cafe Website",
        description:
          "A fully responsive modern website built for Kyara Beverages showcasing millet-based fruit drinks. Features interactive navigation, animated product showcase, contact form, responsive grid layout, and modern UI with pure HTML, CSS, and Vanilla JavaScript. Optimized for performance and cross-browser compatibility.",
        image: p3,
        youtube: "#",
        github: "https://github.com/Aditya07024/Cafe-Website",
        site: "https://cafe-website0728.netlify.app",
      },
    ],
    "Mobile Applications": [
      {
        title: "Mobile Expense Tracker",
        description: "A cross-platform mobile expense tracking application designed to manage daily spending efficiently. Implemented category-wise expense logging, real-time balance calculation, interactive charts for financial insights, and persistent local storage. Designed an intuitive UI for seamless user experience and fast expense entry.",
        image: p5,
        youtube: "#",
        github: "https://github.com/Aditya07024/Expense-Tracker-app",
        site: "#",
      },
    ],
    "Extension / Widgets / Experiments": [
      {
        title: "CodeBuddy – Our Coding Partner",
        description: "An interactive VS Code extension that acts as a real-time coding companion. Monitors errors and warnings, reacts dynamically to developer actions, and gamifies debugging with expressive feedback. Built using the VS Code Extension API with event listeners, command registration, and intelligent state tracking to enhance developer productivity.",
        image: p6,
        youtube: "#",
        github: "https://github.com/Aditya07024/CodeBuddy---Your-Annoying-Coding-Avatar",
        site: "https://marketplace.visualstudio.com/items?itemName=Aditya07024.codebuddy-partner",
      },
    ],
  };

  return (
    <>
      <div className="project-page" id="project">
        <div className="my-work">
          <h2>Featured Projects</h2>
        </div>

        <div className="slide-div">
          <div className="left-div">

            <div className="first-project">
              <div className="project-image" onClick={() => openProject("Web Apps")}>
                <img src={webd} alt="TechMedix" />
                <p>Web Apps</p>
              </div>
              <div className="project-line">
                <div className="waste-div"></div>
                <div className="line"></div>
              </div>
            </div>

            <div className="first-project">
              <div className="project-image" onClick={() => openProject("Mobile Applications")}>
                <img src={mobiled} alt="Zerodha Clone" />
                <p>Mobile Application</p>
              </div>
              <div className="project-line">
                <div className="line"></div>
                <div className="waste-div"></div>
              </div>
            </div>

            <div className="more-text">
              <div className="text1"><h3>"More Projects</h3></div>
              <div className="text2"><p>in Development"</p></div>
            </div>
          </div>

          <div className="center-div"></div>

          <div className="right-div">
            <div className="second-project">
              <div className="line1"></div>
              <div className="project-image" onClick={() => openProject("Extension / Widgets / Experiments")}>
                <img src={extensiond} alt="Mobile App" />
                <p>Extension / Widgets / Experiments</p>
              </div>
            </div>

            <div className="more-text time2">
              <div className="text1"><h3>"More Projects</h3></div>
              <div className="text2"><p>in Development"</p></div>
            </div>

            <div className="more-image">
              <div className="image" onClick={() => openProject("design")}>
                <img src={image2} alt="Design" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP MODAL */}
      {activeProject && (
        <div className="project-modal" onClick={closeProject}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="title-close">
            <h2>{activeProject.toUpperCase()}</h2>
            <h3 onClick={closeProject}>x</h3>
          </div>
            

            <div className="p-div">
              {projectData[activeProject]?.map((project, index) => (
                <div key={index} className="project-card">
                  <a href={project.site} target="_blank" rel="noreferrer">
                    <img
                    
                    src={project.image}
                    alt={project.title}
                    className="project-card-img"
                  />
                  </a>
                  
                  <p className="p-title">{project.title}</p>
                  <p>{project.description}</p>

                  <div className="project-links">
                    <a href={project.youtube} target="_blank" rel="noreferrer">YouTube</a>
                    <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={project.site} target="_blank" rel="noreferrer">Live Site</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectPage;
