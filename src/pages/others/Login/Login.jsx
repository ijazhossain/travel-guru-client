import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { Button } from 'react-bootstrap';
const Login = () => {
    const { user, login, passwordReset } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef('')
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
                <Button onClick={handlePasswordReset} variant="link">Forget Password?</Button>
                <input className='text-center w-100 mt-3 bg-primary' type="submit" value="submit" />
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Login;