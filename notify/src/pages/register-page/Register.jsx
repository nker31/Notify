import React, { useState } from 'react'
import './Register.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Register() {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setComfirmpassword] = useState()
    const [phoneNumber, setPhonenumber] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/register', {email, username, password, phoneNumber})
        .then(result => console.log(result))
        .catch(err => console.log(err))

    }

    return (
        <div className='register-bg'>
            <div className="register-page-container">
                <div className="register-box">
                    <div className="register-box-container">
                        <h1>Welcome to Notify</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                type="text"
                                placeholder="Username"
                                name='username'
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name='confirmPassword'
                                onChange={(e) => setComfirmpassword(e.target.value)}
                            />

                            <input
                                type="tel"
                                placeholder="Phone number"
                                name='phoneNumber'
                                onChange={(e) => setPhonenumber(e.target.value)}
                            />

                            <button className="register-button" type="submit">Register</button>
                        </form>
                        {/* line */}
                        <div className="register-box-line"></div>
                        <Link to='/login'><button className='register-no-account-button'>Already a member?</button></Link>
                    </div>
              </div>
                        </div>
    </div>
    </>
  )

}

export default Register