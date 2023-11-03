import React from 'react';
import './emergency.css';
import Firefighter from '../../images/image-emergency/firefighter.jpg'
import EmergencyCard from '../../components/EmergencyCard';
function Emergency() {
    const dev = [
        {
            name: 'Organizations:Firefighter',
            phone: 'Phone:199',
            image: Firefighter
        },
        {
            name: 'Organizations:Police',
            phone: 'Phone:191',
            image: Firefighter
        },
        {
            name: 'Organizations:Report a missing person',
            phone: 'Phone:1300',
            image: Firefighter
        },
        {
            name: 'Organizations:Report a water accident',
            phone: 'Phone:1195',
            image: Firefighter
        },
        {
            name: 'Organizations:National National Warning Center',
            phone: 'Phone:192',
            image: Firefighter
        },
        {
            name: 'Organizations:Crime Suppression Department',
            phone: 'Phone:1195',
            image: Firefighter
        }
    ];
    return (
        <>
            <div className="emergency-gallery-container">
                <div className="emergency-container-about">
                    {dev.map((dev) => <EmergencyCard name={dev.name} phone={dev.phone} 
                    image={dev.image}/>)}
                    
                </div>
            </div>

        </>
    )
}

export default Emergency