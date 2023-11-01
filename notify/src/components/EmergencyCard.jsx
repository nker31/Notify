import React from 'react'
import './EmergencyCard.css'

function EmergencyCard(props) {
    const props_img = props.emergency
    return (
        <div classNameName="Emergency-card">
            <div className="Emergency-card-image-container">
                <img src={props_img} alt="Avatar"/>
            </div>
            <p className="Emergency-card-title">{props.name}</p>
            <p className="Emergency-card-des">{props.phone}</p>
        </div>
    )
}

export default EmergencyCard