import React from 'react';
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className = "main" >
            <div className="header">
                <span>פרויקטים בתהליך:</span>
            </div>
            <div className="sidebar">
                <div className="mainSidebar">
                    <span>פרויקט משהו בר קיימה</span>
                    <button>כנס</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;