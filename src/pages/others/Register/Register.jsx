import React, { useContext, useState } from 'react';
import './Register.css'
import { AuthContext } from '../../../providers/AuthProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
const Register = () => {
    const { user, createUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(firstName, lastName, email, password, confirmPassword);
        setError('')
        setSuccess('')
        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    setSuccess('Registration successful')
                    sendEmailVerification(user)
                        .then(() => {
                            alert('email verification sent')
                        })
                    updateProfile(user, {
                        displayName: firstName + ' ' + lastName,
                    })

                }).catch(error => {
                    console.log(error.message);
                    setError(error.message)
                })
        } else {
            setError('Password did not match')
        }
    }
    return (
        <div className='mx-auto w-50 '>
            <h1 className='text-center'>Please Register</h1>
            <form onSubmit={handleRegister} className='w-100 mx-auto'>
                <label htmlFor="firstName">First Name</label>
                <input className='d- w-100' type="text" name="firstName" id="firstName" required />
                <label htmlFor="lastName">Last Name</label>
                <input className='d- w-100' type="text" name="lastName" id="lastName" required />
                <label htmlFor="email">Username or Email</label>
                <input className='d- w-100' type="text" name="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input className='d- w-100' type="password" name="password" id="password" />
                <label htmlFor="confirmPassword">Confirm password</label>
                <input className='d- w-100' type="password" name="confirmPassword" id="confirmPassword" required />
                <input className='text-center w-100 mt-3 bg-primary' type="submit" value="submit" />
                <p className='text-danger fs-5 fw-semibold mt-2'>{error}</p>
                <p className='text-success fs-5 fw-semibold mt-2'>{success}</p>
            </form>
        </div>
    );
};

export default Register;