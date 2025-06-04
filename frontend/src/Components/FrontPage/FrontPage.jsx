import React from 'react'
import './FrontPage.css'
import linkdin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import leetcode from '../../assets/leetcode.png'

const FrontPage = () => {
  return (
    <div className='front-page'>
      <div className="text">
        <div className="hello">
          <h2>Hello.</h2>
        </div>
        <div className="name">
          I'm Aditya
        </div>
        <hr/>
        <div className="description">
          Software Developer
        </div>
        <div className="button-div">
          <button className='project-button'>My Projects</button>
          <button>My Resume</button>
        </div>
        <div className="social-icons">
          <img src={linkdin} alt="LinkedIn" />
          <img src={github} alt="GitHub" />
          <img src={leetcode} alt="LeetCode" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
      <div className="com-image">
      </div>
    </div>
  )
}

export default FrontPage