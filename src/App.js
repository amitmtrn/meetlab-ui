import React, { useState } from 'react';

import Post from './components/Post';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';

import style from './App.module.css';
import { useCIKFlow } from '@codeinkit/flows-client/release/js/react';
import config from './config';
import { flows } from '@codeinkit/flows-client/release/js/flows';


function App() {
  const [posts] = useCIKFlow('get_posts', {posts: [], token: config.token}, 'posts');
  const [newPost, setNewPost] = useState('');

  return (
    <div className={style.App}>
      <div>
        <Menu />
      </div>
      <div className={style.mainView}>
        <div className={style.main}>
          <div>
            <input type="text" placeholder="מה מעניין אותך?" onChange={e => setNewPost(e.target.value)} />
            <button onClick={() => {
              flows.execute('add_post', {content: newPost, token: config.token})
            }}>פרסם</button>
          </div>

          {
            posts.map(post=> (
              <Post key={post._id} id={post._id} content={post.content} comments={post.comments} />
            ))
          }
        </div>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
