
import React, { useState } from 'react'
import './SignIn.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Swal from 'sweetalert2'

function SignIn() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {email:email,password:password}
        console.log(data)
        
        axios.post('http://localhost:3001/api/auth/login', data)
        .then(result => {
            console.log(result)
            if (result.data === "Success") {
                Swal.fire({
                    icon: 'success',
                    title: 'Register Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    navigate('/')
                });
            } else if (result.data === "No record existed") {
                Swal.fire({
                    icon: 'error',
                    title: 'No account found. Please register to continue.',
                    showConfirmButton: false,
                    timer: 2000,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'The email or password is incorrect.',
                    showConfirmButton: false,
                    timer: 2000,
                });
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