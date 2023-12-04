import React, { useState } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function SignIn() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/home')
            }
        })
        .catch(err => console.log(err))

    }

  return (
    <>
        <div className="sign-in-bg">
            <div className="sign-in-page-container">
                <div className="sign-in-box">
                    <div className="sign-in-box-container">
                        <h1>Welcome to Notify</h1>
                        <form onSubmit={handleSubmit}>
                        <input
                                type="email"
                                placeholder="Email"
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="sign-in-button" type="submit">Sign In</button>
                        </form>
                        {/* line */}
                        <div className="sign-in-box-line"></div>
                        <Link to='/register'><button className='sign-in-no-account-button'>Not on Notify yet?</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
        
    </>
  )
}

export default SignIn