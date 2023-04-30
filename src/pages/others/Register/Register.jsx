import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div className='mx-auto w-50 '>
            <h1 className='text-center'>Please Register</h1>
            <form className='w-100 mx-auto'>
                <label htmlFor="firstName">First Name</label>
                <input className='d- w-100' type="text" name="firstName" id="firstName" required />
                <label htmlFor="lastName">Last Name</label>
                <input className='d- w-100' type="text" name="firstName" id="lastName" required />
                <label htmlFor="email">Username or Email</label>
                <input className='d- w-100' type="text" name="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input className='d- w-100' type="password" name="password" id="password" />
                <label htmlFor="confirmPassword">Confirm password</label>
                <input className='d- w-100' type="password" name="confirmPassword" id="confirmPassword" required />
                <input className='text-center w-100 mt-3 bg-primary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Register;