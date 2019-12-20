import React from 'react';

import style from './Menu.module.css';

function Menu() {
    return (
        <div className={style.header}>
            <div className={style.linkMenu}>
                <button className={style.Menu_Button}>M</button>
                <button className={style.Home_Button}>דף הבית</button>
                <a href="/#">פרופיל אישי</a>
                <a href="/#">ארכיון</a>
            </div>
            <div>
                <input className={style.Menu_Search}  type="search" />
                <button className={style.Menu_Search_B}>חפש</button>
            </div>
        </div>
    )
}

export default Menu;