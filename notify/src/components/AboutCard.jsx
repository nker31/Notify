import React from 'react'

import './AboutCard.css'

function AboutCard(props) {
  const prof_img = props.profile

  return (
    <div className="about-card">
      <img src={prof_img} alt="Avatar"/>
      <div className="about-card-container">
        <h4><b>{props.name}</b></h4>
        <p>ID: {props.id}</p>
      </div>
    </div>
  )
}

export default AboutCard