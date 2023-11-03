import React from 'react';
import './emergency.css';
import Firefighter from '../../images/image-emergency/firefighter.jpg';
import EmergencyCard from '../../components/EmergencyCard';
import Police from '../../images/image-emergency/Police.jpg'
import Wateracc from '../../images/image-emergency/warteracc.jpg'
import Pp from '../../images/image-emergency/PP.jpg'
import Tcsd from '../../images/image-emergency/TCSD.jpg'
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
            image: Police
        },
        {
            name: 'Organizations:Report a missing person',
            phone: 'Phone:1300',
            image: Police
        },
        {
            name: 'Organizations:Report a water accident',
            phone: 'Phone:1195',
            image: Wateracc
        },
        {
            name: 'Organizations:National National Warning Center',
            phone: 'Phone:192',
            image: Pp
        },
        {
            name: 'Organizations:Crime Suppression Department',
            phone: 'Phone:1195',
            image: Tcsd
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