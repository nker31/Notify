import React from 'react'
import './Register.css'
import Navbar from '../../components/navbar'

function Register() {
  return (
    <>
    <Navbar/>
    <div className='register-bg'>
        <div className="register-page-container">
            <div className="register-box">
                <div className="register-box-container">
                    <h1>Welcome to Notify</h1>
                    <form>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="password" placeholder="Confirm Password"/>
                        <input type="tel" placeholder="Phone number"/>

                        <button className="register-button" type="submit">Register</button>
                    </form>
                    {/* line */}
                    <div className="register-box-line"></div>
                    <button className='register-no-account-button'>Already a member?</button>
                </div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Register