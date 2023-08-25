import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PlaylistCreator from './PlaylistCreator';
import Login from './Login';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div id="main">
        {/* <Link to="/playlister">
          <h1>Create Your Playlist</h1>
        </Link> */}
        <Link to="/Login">
          <h3>Sign in to Spotify</h3>
        </Link>
        <Routes>
          <Route
            path="/playlister"
            element={<PlaylistCreator />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
