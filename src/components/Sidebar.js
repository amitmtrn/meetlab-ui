import React from 'react';

import style from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={style.main} >
            <div className={style.header}>
                <span>פרויקטים בתהליך:</span>
            </div>
            <div className={style.sidebar}>
                <div className={style.mainSidebar}>
                    <span>פרויקט משהו בר קיימה</span>
                    <button>כנס</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;