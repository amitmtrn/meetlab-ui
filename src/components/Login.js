import React, { useState } from 'react';
import "./Login.css"
import { flows } from '@codeinkit/flows-client/release/js/flows';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className = "Login_Main" >
            <span >התחבר</span>
            <div className="Login_Username">
                <span>שם משתמש:</span>
                <input type = "text" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className = "Login_Password">
                <span>סיסמא:</span>
                <input type = "password" onChange={e => setPassword(e.target.value)} />
            </div>
            <button onClick={() => flows.execute('login', {username, password})}>התחבר</button>
        </div>
    )
}

export default Login;