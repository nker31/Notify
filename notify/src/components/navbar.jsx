import React from 'react';
import './navbar.css';
import { MdOutlineAccountCircle } from 'react-icons/md';

function Navbar() {
  function toggleHam() {
    const x = document.querySelector(".ham-menu");
    x.classList.toggle("change");

    let myMenu = document.getElementById('myMenu');
    if (myMenu.className === 'nav-menu') {
        myMenu.className += ' menu-active';
    } else {
        myMenu.className = 'nav-menu';
    }
  }

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-wrapper">
            <div className="logo">
              <h3>Notify</h3>
            </div>
            <ul className="nav-menu" id="myMenu">
              <li><a href="/" className='nav-li'>Home</a></li>
              <li><a href="/" className='nav-li'>Donate</a></li>
              <li><a href="/" className='nav-li'>About us</a></li>
              <li><a href="/" className='nav-emergency'>Emergency</a></li>
              <li><a href="/" className='nav-profile-icon'><MdOutlineAccountCircle/></a></li>
            </ul>
            <div className="ham-menu" onClick={toggleHam}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </nav> 
    </>
  )
}

export default Navbar;
