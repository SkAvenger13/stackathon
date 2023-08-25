import React from 'react';
import axios from 'axios';

const Login = () => {
  // const response = await axios.get('/api');
  // console.log(response);
  return (
    <a
      href={
        'https://accounts.spotify.com/authorize?client_id=dcf16f016de942de8e5eec9035ef054c&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fplaylister&scope=playlist-modify-private'
      }
    >
      Sign in to Spotify
    </a>
  );
};

export default Login;
