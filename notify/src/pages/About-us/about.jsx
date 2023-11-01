import React from 'react';
import './about.css';
import Peam from '../../images/imageteam/peam.jpg';
import MF from '../../images/imageteam/mf.JPG';
import Phoomtep from '../../images/imageteam/phoom.png';
import Boom from '../../images/imageteam/boom.png';
import Bank from '../../images/imageteam/bank.jpg';
import Dew from '../../images/imageteam/dew.jpg';
import AboutCard from '../../components/AboutCard';
import bannerImg from '../../images/map-background.png'

function About(){
    const dev = [
        {
            name: 'Phoomtep Pitakamnuay',
            id: 1630704896,
            profile: Phoomtep
        },
        {
            name: 'Nathat Kuanthanom',
            id: 1630704045,
            profile: Peam
        },
        {
            name: 'Poomwipat Yimyailuang',
            id: 1630704284,
            profile: MF
        },
        {
            name: 'Pansawut Pujachareon',
            id: 1630704458,
            profile: Boom
        },
        {
            name: 'Surabadee Intanai',
            id: 1630704235,
            profile: Bank
        },
        {
            name: 'Kittipat Subprasert',
            id: 1630700225,
            profile: Dew
        }
    ];
    return(
        <>
            <div className="about-banner">
                    
                <img src={bannerImg} alt="" />

                    <div className="about-banner-container">
                        <div className="about-banner-info">
                            <h3>About Us</h3>
                            <p>The Notify website team is full of web development experts. Ready to contact and coordinate to assist you.</p>
                        </div>
                    </div>
                
            </div>

            <div className="gallery-container">
                <div className="container-about">
                    {dev.map((dev) => <AboutCard name={dev.name} id={dev.id} profile={dev.profile}/>)}
                    
                </div>
            </div>
        </>
    )
}

export default About