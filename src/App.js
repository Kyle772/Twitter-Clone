import React from 'react';
import logo from './logo.svg';
import './App.css';

import Profile from './Components/Profile/Profile';
import Post from './Components/Post/Post';
import Feed from './Components/Feed/Feed';
import Recommendations from './Components/Recommendation/Recommendations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="row center">
        <div id="ProfileCon" className="col">
          <Profile/>
          <Post/>
        </div>
        <div id="FeedCon" className="col">
          <Feed/>
        </div>
        <div id="RecCon" className="col">
          <Recommendations/>
        </div>
      </div>
    </div>
  );
}

export default App;
