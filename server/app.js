const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '../public/index.html'));
  console.log(process.env.CLIENT_ID);
  res.send(
    '<a href="https://accounts.spotify.com/authorize?client_id=' +
      process.env.CLIENT_ID +
      '&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome&scope=playlist-modify-private">Sign in to Spotify Here</a>'
  );
});

app.get('/home', (req, res) => {
  res.send('<h1>Welcome to the Home Page</h1>');
});

module.exports = app;
