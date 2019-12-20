import React from 'react';

import style from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={style.main} >
            <div className={style.header}>
                <span>פרויקטים בתהליכים:</span>
            </div>
            <div className={style.sidebar}>
                <div className={style.mainSidebar}>
                <img src="https://placekeanu.com/135/120" width="135px" height="120px" />
                    <div className={style.percent}>
                    <span>רגליים ביוניות לחתולים</span>  
                    <button className={style.Buttonly}>אחוזים%</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;