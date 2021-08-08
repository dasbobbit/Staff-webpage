import '../styles/Navbar.css';
import Menulines from '../assets/Menulines.svg';
import React from 'react';

const Navbar = () => {

  return (
    <nav className="navBar">
      <ul>
        <li><a href="/#">Dashboard</a></li>
        <li><a href="/#">Our Agency</a></li>
        <li><a href="/#">Our Staff</a></li>
        <li><a href="/#">Locations</a></li>
        <li><a href="/#">Latest</a></li>
        <li><a href="/#">Upcoming</a></li>
        <li><a href="/#">Resources</a></li>
        <li><a href="/#">Your Stein IAS</a></li>
      </ul>
      <div className="navBar__menuLines">
        <img src={Menulines} alt="" />
      </div>
    </nav>
  )
}

export default Navbar;