import React, { useState } from 'react';
import './Register.css'
import Interest from './Interests';
import { flows } from '@codeinkit/flows-client/release/js/flows';

function Register() {
    const interests = ['ביולוגיה', 'כלכלה', 'עיצוב', 'מדמ"ח', 'חתולים'];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verPassword, setVerPassword] = useState('-');
    const [selectedInterest, setSelectedInterest] = useState([]);
    const verDesign = {
        background: password === verPassword ? '#bada55' : 'deeppink'
    }


    return (
        <div className = "Register_Main" >
            <span >הירשם</span>
            <div className="Register_Username">
                <span>שם משתמש:</span>
                <input type="text" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className = "Register_Password">
                <span>סיסמא:</span>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="Register_Password_Ver" style={verDesign}>
                <span>אימות סיסמא:</span>
                <input type="password" onChange={e => setVerPassword(e.target.value)} />
            </div>
            <span>אנא בחר תחומי עניין:</span>
            {interests.map(interest => (
                <Interest title={interest} onChecked={(title, isChecked) => {
                    if(isChecked) {
                        setSelectedInterest([...selectedInterest, title])
                    } else {
                        const sintrest = [...selectedInterest];

                        sintrest.splice(selectedInterest.indexOf(title), 1);
                        setSelectedInterest(sintrest);
                    }
                }} />
            ))}

            <button onClick={() => flows.execute('register', {username, password, interests: selectedInterest})} disabled={password !== verPassword}>הרשם</button>
        </div>
    )
}

export default Register;