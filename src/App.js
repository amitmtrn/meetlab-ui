import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import Post from './components/Post';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Register from './components/Register';
import Login from './components/Login';

import style from './App.module.css';
import { useCIKFlow } from '@codeinkit/flows-client/release/js/react';
import { flows } from '@codeinkit/flows-client/release/js/flows';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

function Main() {
  const [posts] = useCIKFlow('get_posts', {posts: [], token: window.localStorage.getItem('token')}, 'posts');
  const [newPost, setNewPost] = useState('');

  return (
    <div className={style.App}>
      <div>
        <Menu />
      </div>
      <div className={style.mainView}>
        <div className={style.main}>
          <div className={style.what_inte}>
            <button className={style.what_inte_b} onClick={() => {
              flows.execute('add_post', {content: newPost, token: window.localStorage.getItem('token')})
            }}>פרסם</button>
            <input type="text" placeholder="מה מעניין אותך?" onChange={e => setNewPost(e.target.value)} />
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
