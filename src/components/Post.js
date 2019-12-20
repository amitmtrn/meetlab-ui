import React, { useState } from 'react';

import style from './Post.module.css';
import { flows } from '@codeinkit/flows-client/release/js/flows';

function Post(props) {
    const [newComment, setNewComment] = useState('');

    return (
        <div className={style.main} >
            <div className={style.post}>
                <div className={style.mainPost}>
                    <div style ={{display:"flex",flexDirection:"column"}}>

                    <div style ={{display:"flex",flexDirection:"row"}}>
                    <div className={style.user_icon}>
                        <img src="https://placekeanu.com/100/100" width="100px" height="100px" />
                        <span>ד"ר קיאנו</span>
                    </div>

                    <span>{props.content}</span>
                    <img src="https://placekeanu.com/120/150" width="120px" height="150px" />
                    {props.comments.map(comment => (
                        <div key={comment._id}>{comment.user && comment.user.username}:"{comment.content}"</div>
                        ))}
                    </div>
                    <div className={style.comment} style={{display:"flex",flexDirection:"row",margin:"20px"}}>
                        <button className={style.Post_Button} onClick={() => flows.execute('add_comment', {postId: props.id,content: newComment, token: window.localStorage.getItem('token')})}>פרסם</button>
                        <input type="text" onChange={e=>setNewComment(e.target.value)} placeholder="הגב כאן"></input>
                    </div>
                </div>
                    </div>
            </div>
        </div>
    );
}

export default Post;