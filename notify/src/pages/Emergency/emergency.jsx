import React from 'react';
import './emergency.css';
import firefiter from '../../images/image-emergency/firefighter.jpg'
import EmergencyCard from '../../components/EmergencyCard';
function Emergency() {
    const dev = [
        {
            name: 'Kuy',
            phone: 1630704896,
            image: firefiter
        },
        {
            name: 'Nathat Kuanthanom',
            phone: 1630704045,
            image: firefiter
        },
        {
            name: 'Poomwipat Yimyailuang',
            phone: 1630704284,
            image: firefiter
        },
        {
            name: 'Pansawut Pujachareon',
            phone: 1630704458,
            image: firefiter
        },
        {
            name: 'Surabadee Intanai',
            phone: 1630704235,
            image: firefiter
        },
        {
            name: 'Kittipat Subprasert',
            phone: 1630700225,
            image: firefiter
        }
    ];
    return (
        <>
            <div className="gallery-container">
                <div className="container-about">
                    {dev.map((dev) => <EmergencyCard name={dev.name} phone={dev.phone} 
                    image={dev.emergnncy}/>)}
                    
                </div>
            </div>

        </>
    )
}

export default Emergency