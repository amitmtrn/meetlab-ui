import React from 'react';
import "./Interests.css"
function Interests(props) {

    return (
        <div className = "Interests_Main" >
            <div className = "Interests_Interests">
                <div className="Interests_Box">
                    <span>{props.title}</span>
                    <input type="checkbox" onChange={e => props.onChecked(props.title, e.target.checked)}></input>   
                </div>
            </div>
        </div>
    );
}

export default Interests;