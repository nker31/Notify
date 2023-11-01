import React from 'react'
import Dew from '../images/imageteam/dew.jpg'
import './AboutCard.css'

function AboutCard() {
  return (
    <div class="about-card">
    <img src={Dew} alt="Avatar"/>
    <div class="about-container">
    <h4><b>Nathat Kuanthanom</b></h4>
    <p>Peam</p>
    <p>Student ID: 1630704045</p>
    <a href="https://nkpeam51.wixsite.com/nathatkuan31" target="_blank">My portfolio</a>
    </div>
</div>
  )
}

export default AboutCard