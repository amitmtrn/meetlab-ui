import React from 'react';
import "./Login.css"
import Interest from './Interests';
function Login() {
    return (
        <div className = "Login_Main" >
            <span >Login</span>
            <div className="Login_Username">
                <span>שם משתמש:</span>
                <input type = "text"></input>
            </div>
            <div className = "Login_Password">
                <span>סיסמא:</span>
                <input type = "password"></input>
            </div>
        </div>
    )
}

export default Login;