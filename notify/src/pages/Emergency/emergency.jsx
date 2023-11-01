import React from 'react';
import './emergency.css';
import Dew from '../../images/imageteam/dew.jpg';

function Emergency(){
    return(
        <>
            <div class="hero-emergency">
                <div class="container-emergency">
                    <div class="hero-con-emergency">
                        <div class="hero-info-emergency">
                            <h3>About Us</h3>
                            <p>The Notify website team is full of web development experts. Ready to contact and coordinate to assist you..</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="blog-about-emergency">
                <div class="container-about">

                    <div class="blog-con-emergency">
                        <div class="blog-item-emergency">
                            <img src={Dew} alt="Description" />
                            <h4>dssdasdasdas</h4>
                            <a href="https://www.udemy.com/course/fullstackwebdev/" target="_blank" class="blog-btn">Learn More</a>
                        </div>

                        <div class="blog-item-emergency">
                        <img src={Dew} alt="Description" />
                            <a href="https://www.udemy.com/course/fullstackwebdev/" target="_blank" class="blog-btn">Learn More</a>
                        </div>

                        <div class="blog-item-emergency">
                        <img src={Dew} alt="Description" />
                            <a href="https://www.udemy.com/course/fullstackwebdev/" target="_blank" class="blog-btn">Learn More</a>
                        </div>

                        <div class="blog-item-emergency">
                        <img src={Dew} alt="Description" />
                            <a href="https://www.udemy.com/course/fullstackwebdev/" target="_blank" class="blog-btn">Learn More</a>
                        </div>

                        <div class="blog-item-emergency">
                        <img src={Dew} alt="Description" />
                            <a href="https://www.udemy.com/course/fullstackwebdev/" target="_blank" class="blog-btn">Learn More</a>
                        </div>

                        <div class="blog-item-emergency">
                        <img src={Dew} alt="Description" />
                            <a href="https://www.udemy.com/course/fullstackwebdev/" target="_blank" class="blog-btn">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Emergency