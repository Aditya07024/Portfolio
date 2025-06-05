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
          <li><a href="#about">About</a></li>
          <li><a href='#project'>Projects</a></li>
          <li><a href='#skills'>Skills</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar