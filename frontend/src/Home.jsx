import React from 'react'
import './Home.css'
import FrontPage from './Components/FrontPage/FrontPage.jsx'
import AboutPage from './Components/AboutPage/AboutPage.jsx'
import ProjectPage from './Components/ProjectPage/ProjectPage.jsx'
import Skills from './Components/Skills/Skills.jsx'
import ContactPage from './Components/ContactPage/ContactPage.jsx'
import EducationPage from './Components/EducationPage/EducationPage.jsx'
const Home = () => {
  return (
    <div>
      <FrontPage />
      <AboutPage/>
      {/* <EducationPage/> */}
       <ProjectPage/>
      <Skills/>
      <ContactPage/>
    </div>
  )
}

export default Home
