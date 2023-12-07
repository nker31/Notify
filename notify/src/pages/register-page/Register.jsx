import React, { useState, useRef } from 'react'
import './Register.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';
import Swal from 'sweetalert2'

function Register() {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setComfirmPassword] = useState('')
    const [phoneNumber, setPhonenumber] = useState('')
    const navigate = useNavigate()

    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const phoneNumberRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
        if (!validator.isEmail(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please enter a valid email address',
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setTimeout(() => {
                    emailRef.current.focus();
                }, 500);
            });
            return;
        }

        if (!validator.isLength(username, { min: 6, max: 20 })) {
            Swal.fire({
                icon: 'error',
                title: 'Username Incorrect',
                text: 'Username must between 6 and 20 characters.',
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setTimeout(() => {
                    usernameRef.current.focus();
                }, 500);
            });
            return;
        }

        if (!validator.isLength(password, { min: 6 })) {
            Swal.fire({
                icon: 'error',
                title: 'Password Incorrect',
                text: 'Password must be atleast 6 characters.',
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setTimeout(() => {
                    passwordRef.current.focus();
                }, 500);
            });
            return;
        }

        if (!validator.equals(password, confirmPassword)) {
            Swal.fire({
                icon: 'error',
                title: 'Password Mismatch',
                text: 'Please ensure your passwords match.',
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setTimeout(() => {
                    confirmPasswordRef.current.focus();
                }, 500);
            });
            return;
        }

        if (!validator.isMobilePhone(phoneNumber, 'th-TH')) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Phone Number',
                text: 'Please ensure your phone number on th-TH',
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                setTimeout(() => {
                    phoneNumberRef.current.focus();
                }, 500);
            });
            return;
        }

        axios.post('http://localhost:3001/api/auth/register', { email, username, password, phoneNumber })
            .then(result => {
                Swal.fire({
                    icon: 'success',
                    title: 'Register Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    axios.post('http://localhost:3001/api/auth/login', { email, password }).then(result => {
                        localStorage.setItem('token', result.data.token)
                        navigate('/')
                    })
                });
            })
            .catch(err => {
                if (err.response){
                    const errorMessage = err.response.data.error;
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: errorMessage,
                        showConfirmButton: false,
                        timer: 1500,
                    });  
                } else {
                    console.log(err)
                }
            });
    };

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
                                ref={emailRef}
                            />

                            <input
                                type="text"
                                placeholder="Username"
                                name='username'
                                onChange={(e) => setUsername(e.target.value)}
                                ref={usernameRef}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                name='password'
                                onChange={(e) => setPassword(e.target.value)}
                                ref={passwordRef}
                            />

                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name='confirmPassword'
                                onChange={(e) => setComfirmPassword(e.target.value)}
                                ref={confirmPasswordRef}
                            />

                            <input
                                type="tel"
                                placeholder="Phone number"
                                name='phoneNumber'
                                onChange={(e) => setPhonenumber(e.target.value)}
                                ref={phoneNumberRef}
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
    )
}

export default Register;
