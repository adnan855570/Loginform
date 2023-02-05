import React from 'react'
import {useState} from 'react';

import './Login.css';
const Login = () => {
    const [popupStyle , showPopup] = useState('hide');

    const popup = () => {
        showPopup('login-popup')
        setTimeout( () => showPopup('hide') , 3000)
    }
  return (
    <div className='cover'>
        <h1>Login</h1>
        <input type="text" name="username" id="" placeholder='username' />
        <input type="password" name="password" id="" placeholder='password' />

        <div className="login-btn" onClick={popup}>Login</div>

        <p className="text">or Login using</p>
        <div className="alt-login">
            <div className="facebook"></div>
            <div className="google"></div>
        </div>

        <div className={popupStyle}>
            <h3>Login Failed</h3>
            <p>username or password incorrect</p>
        </div>
    </div>
  )
}

export default Login