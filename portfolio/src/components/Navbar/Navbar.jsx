import React from 'react'
import './Navbar.css'
import profilePic from '../../assets/imgs/d.jpg';
import { NavLink } from "react-router-dom";



export default function Navbar() {
  return (
    <>
    <div className="navb">
      <div className="pfp cont">
  <img className="" src={profilePic} /></div>
  <h3 className="nav-name fakhama">Jackson Ford</h3>
  <p><span className="text-primary">UI/UX/Designer</span> in Philippines</p>
  <nav className="nav flex-column nav-underline">
  <NavLink to="/home" className="nav-link">Home</NavLink>
  <NavLink to="/about" className="nav-link">About</NavLink>
  <NavLink to="/skills" className="nav-link">Skills</NavLink>
  <NavLink to="/experience" className="nav-link">Experience</NavLink>
  <NavLink to="/work" className="nav-link">Work</NavLink>
</nav>
</div>

    </>
  )
}
