import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className='mx-auto w-50 '>
            <h1 className='text-center'>Login</h1>
            <form className='w-100 mx-auto'>

                <label htmlFor="email">Username or Email</label>
                <input className='d- w-100' type="text" name="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input className='d- w-100' type="password" name="password" id="password" />

                <input className='text-center w-100 mt-3 bg-primary' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;