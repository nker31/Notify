import React from 'react';
import './about.css';
import Dew from '../../images/imageteam/dew.jpg';
import AboutCard from '../../components/AboutCard';

function About(){
    return(
        <>
            <div class="hero-about">
                <div class="container-about">
                    <div class="hero-con-about">
                        <div class="hero-info-about">
                            <h3>About Us</h3>
                            <p>The Notify website team is full of web development experts. Ready to contact and coordinate to assist you.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-about">
                <div class="container-about">
                    <AboutCard/>
                    <AboutCard/>
                    <AboutCard/>
                    <AboutCard/>
                    <AboutCard/>
                    <AboutCard/>
                    
                </div>
            </div>
        </>
    )
}

export default About