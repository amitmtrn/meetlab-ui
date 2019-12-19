import React from 'react';
import "./Menu.css"
function Menu() {
    return (
        <div className="header">
            <span style={{margin:"10px"}}>פרופיל אישי</span>
            <span style={{margin:"10px"}}>ארכיון</span>
            <input type="search"></input>
            <button>חפש</button>
        </div>
    )
}

export default Menu;