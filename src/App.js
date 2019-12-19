import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Menu from './Menu';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
      <div>
      <Menu></Menu>  
      </div>
      <div className="mainView">
      <Post ></Post>
      <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
