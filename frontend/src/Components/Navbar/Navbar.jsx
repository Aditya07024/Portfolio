import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <p>Portfolio</p>
      </div>
      <div className="nav-right">
        <ul className='nav-links'>
          <li>About</li>
          <li>Projects</li>
          <li>My Expertise</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar