import React from 'react'
import './navbar.css'
import { MdOutlineAccountCircle } from 'react-icons/md';

function navbar() {
  return (
    <>
      <nav>
            <div class="nav-container">
                <div class="nav-wrapper">
                    <div class="logo">
                        <h3>Notify</h3>
                    </div>
                    <ul class="nav-menu" id="myMenu">
                        <li><a href="/" className='nav-li'>Home</a></li>
                        <li><a href="/" className='nav-li'>Donate</a></li>
                        <li><a href="/" className='nav-li'>About us</a></li>
                        <li><a href="/" className='nav-emergency'>Emergency</a></li>
                        <li><a href="/" className='nav-profile-icon'><MdOutlineAccountCircle/></a></li>
                    </ul>
                    
                </div>
            </div>
        </nav> 
    </>
  )
}

export default navbar