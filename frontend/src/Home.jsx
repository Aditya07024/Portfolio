import React from 'react'
import './Home.css'
import FrontPage from './Components/FrontPage/FrontPage.jsx'
import AboutPage from './Components/AboutPage/AboutPage.jsx'
import ProjectPage from './Components/ProjectPage/ProjectPage.jsx'
const Home = () => {
  return (
    <div>
      <FrontPage />
      <AboutPage/>
      {/* <ProjectPage/> */}
    </div>
  )
}

export default Home