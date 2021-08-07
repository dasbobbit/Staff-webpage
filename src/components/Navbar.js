import '../styles/Navbar.css';
import Menulines from '../assets/Menulines.svg';
import React from 'react';

const Navbar = () => {

  return (
    <nav className="navBar">
      <ul>
        <li><a href="s">Dashboard</a></li>
        <li><a href="s">Our Agency</a></li>
        <li><a href="s">Our Staff</a></li>
        <li><a href="s">Locations</a></li>
        <li><a href="s">Latest</a></li>
        <li><a href="s">Upcoming</a></li>
        <li><a href="s">Resources</a></li>
        <li><a href="s">Your Stein IAS</a></li>
      </ul>
      <div className="navBar__menuLines">
        <img src={Menulines} alt="" />
      </div>
    </nav>
  )
}

export default Navbar;