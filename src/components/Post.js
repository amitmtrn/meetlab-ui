import React, { useState } from 'react';

import style from './Post.module.css';
import { flows } from '@codeinkit/flows-client/release/js/flows';

function Post(props) {
    const [newComment, setNewComment] = useState('');

    return (
        <div className={style.main} >
            <div className={style.post}>
                <div className={style.mainPost}>
                    <span>{props.content}</span>
                    {props.comments.map(comment => (
                        <div key={comment._id}>{comment.user && comment.user.username}:"{comment.content}"</div>
                    ))}
                    <div className={style.comment} style={{display:"flex",flexDirection:"row",margin:"20px"}}>
                        <input type="text" onChange={e=>setNewComment(e.target.value)} placeholder="הגב כאן"></input>
                        <button onClick={() => flows.execute('add_comment', {postId: props.id,content: newComment, token: window.localStorage.getItem('token')})}>פרסם</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;