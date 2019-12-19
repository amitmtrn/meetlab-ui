import React from 'react';

import style from './Menu.module.css';

function Menu() {
    return (
        <div className={style.header}>
            <div className={style.linkMenu}>
                <a href="#">פרופיל-אישי</a>
                <a href="#">ארכיון</a>
            </div>
            <div>
                <input type="search" />
                <button>חפש</button>
            </div>
        </div>
    )
}

export default Menu;