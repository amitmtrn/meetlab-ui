import React from 'react';
import "./Register.css"
import Interest from './Interests';
function Register() {
    return (
        <div className = "Register_Main" >
            <span >User Creation</span>
            <div className="Register_Username">
                <span>שם משתמש:</span>
                <input type = "text"></input>
            </div>
            <div className = "Register_Password">
                <span>סיסמא:</span>
                <input type = "password"></input>
            </div>
            <div className = "Register_Password_Ver">
            <span>אימות סיסמא:</span>
            <input type = "password"></input>   
            </div>
            <span>אנא בחר תחומי עניין:</span>
            <Interest></Interest>
            <Interest></Interest>
            <Interest></Interest>
        </div>
    )
}

export default Register;