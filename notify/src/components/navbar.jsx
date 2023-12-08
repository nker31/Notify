import React, { useState, useEffect ,useContext } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineAccountCircle } from 'react-icons/md';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthContext';
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
  const { isAuthenticated } = useContext(AuthContext);
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "คุณต้องการออกจากระบบหรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: 'grey',
      confirmButtonText: 'ใช่ ออกจากระบบเลย!',
      cancelButtonText: 'ยกเลิก'
    });

    if (result.isConfirmed) {
      await axios.post("http://localhost:3001/api/auth/logout", "", { withCredentials: true });
      setIsAuthenticated(false);
      navigate("/login");
    }
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-wrapper">
            <div className="logo">
              <h3>Notify</h3>
            </div>
            <ul className="nav-menu" id="myMenu">
              <li><Link to="/" className='nav-li'>Home</Link></li>
              <li><Link to="/donate" className='nav-li'>Donate</Link></li>
              <li><Link to="/about" className='nav-li'>About us</Link></li>
              <li><Link to="/emergency" className='nav-emergency'>Emergency</Link></li>
              {isAuthenticated && (
                  <li className='nav-profile-icon'>
                    <MdOutlineAccountCircle/>
                    <div className="dropdown-content">
                      <a href="/" onClick={logout}>Logout</a>
                    </div>
                  </li>
                )}
              <li className='nav-li-profile'><Link to="/" onClick={logout}>Logout</Link></li>
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
