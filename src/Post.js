import React from 'react';
import "./Post.css"
function Post() {
    return (
        <div className = "main" >
            <div className="header">
                <input type="text" placeholder="מה מעניין אותך?"></input>
                <button>פרסם</button>
            </div>
            <div className="post">
                <div className="mainPost">
                    <span>שלום חברים, לחתול שלי אין רגל!!</span>
                    <div className="comment" style={{display:"flex",flexDirection:"row",margin:"20px"}}>
                        <input type="text" placeholder="הגב כאן"></input>
                        <button>פרסם</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;