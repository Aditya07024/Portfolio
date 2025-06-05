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
          Website Developer
        </div>
        <div className="button-div">
          <button className='project-button'><a href="#project">My Projects</a></button>
          <button><a href="https://drive.google.com/drive/folders/1-ADQBKLl0qADph0_T-f-CiBb6pQoVNsh?usp=sharing">My Resume</a></button>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/adityakumar0702/"><img src={linkdin} alt="LinkedIn" /></a>
          <a href="https://github.com/Aditya07024"><img src={github} alt="GitHub" /></a>
          <a href="https://leetcode.com/u/adityakumar07024/"><img src={leetcode} alt="LeetCode" /></a>
          <a href="https://x.com/Aditya07024"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.instagram.com/aditya_chaudhary_._/"><img src={instagram} alt="Instagram" /></a>
        </div>
      </div>
      <div className="com-image">
      </div>
    </div>
  )
}

export default FrontPage