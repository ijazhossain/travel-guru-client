import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
const Login = () => {
    const { user, login, passwordReset, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef('')
    /*   if (loading) {
          return <LoadingSpinner></LoadingSpinner>
      } */
    // console.log(user);
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })

            }).catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    const handlePasswordReset = () => {
        const email = emailRef.current.value;
        // console.log(email);
        passwordReset(email)
            .then(() => {
                alert('password reset mail sent')
            }).catch(() => { })
    }
    return (
        <div className='mx-auto w-50 '>
            <h1 className='text-center'>Login</h1>
            <form onSubmit={handleSignIn} className='w-100 mx-auto'>

                <label htmlFor="email">Username or Email</label>
                <input className='d- w-100' type="text" name="email" id="email" ref={emailRef} required />
                <label htmlFor="password">Password</label>
                <input className='d- w-100' type="password" name="password" id="password" />
                <Button className='p-0 my-3' onClick={handlePasswordReset} variant="link">Forget Password?</Button>
                <p>Already have an account?
                    <Link to="/register">Register</Link>
                </p>
                <input className='text-center w-100 mt-3 bg-primary' type="submit" value="submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Login;