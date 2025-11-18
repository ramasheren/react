import React from 'react'
import './Navbar.css'
import profilePic from '../../assets/imgs/imgi_3_about-BgAkqdr2.jpg';


export default function Navbar() {
  return (
    <>
    <div className="navb">
  <img className="pfp" src={profilePic} />
  <h3 className="nav-name">Jackson Ford</h3>
  <p><span className="text-primary">UI/UX/Designer</span> in Philippines</p>
  <nav className="nav flex-column nav-underline">
    <a className="nav-link" href="/home">Home</a>
    <a className="nav-link" href="/about">About</a>        
    <a className="nav-link" href="/skills">Skills</a>
    <a className="nav-link" href="/experience">Experience</a>
    <a className="nav-link" href="/work">Work</a>
  </nav>
</div>

    </>
  )
}
