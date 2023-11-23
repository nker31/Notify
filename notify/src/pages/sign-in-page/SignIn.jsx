import React from 'react'
import Navbar from '../../components/navbar'
import './SignIn.css'
function SignIn() {
  return (
    <>
        <Navbar/>
        <div className="sign-in-bg">
            <div className="sign-in-page-container">
                <div className="sign-in-box">
                    <div className="sign-in-box-container">
                        <h1>Welcome to Notify</h1>
                        <form>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <button className="sign-in-button" type="submit">Sign In</button>
                        </form>
                        {/* line */}
                        <div className="sign-in-box-line"></div>
                        <button className='sign-in-no-account-button'>Not on Notify yet?</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </>
  )
}

export default SignIn