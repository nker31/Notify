import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* <img src="/path-to-your-logo.png" alt="Flowbite Logo" /> */}
          <h3>Notify</h3>
          {/* <span>Flowbite</span> */}
        </div>
        <div className="footer-links    ">
          <a href="/about">About us</a>
          <a href = "mailto: phoomtep.pita@bumail.net">Contact us</a>
          
        </div>
        <div className="footer-copy">
          © 2023 Notify™. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer