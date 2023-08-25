const express = require('express');
const path = require('path');
require('dotenv').config();
const axios = require('axios');
const queryString = require('node:querystring');

const app = express();

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api', (req, res) => {
  // res.send(
  //   '<a href="https://accounts.spotify.com/authorize?client_id=' +
  //     process.env.CLIENT_ID +
  //     '&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fhome&scope=playlist-modify-private">Sign in to Spotify Here</a>'
  // );
  res.send(
    'https://accounts.spotify.com/authorize?client_id=' +
      process.env.CLIENT_ID +
      '&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%23%2Fplaylister&scope=playlist-modify-private'
  );
});

app.get('/api/home', async (req, res) => {
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    queryString.stringify({
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: process.env.REDIRECT_URI,
    }),
    {
      headers: {
        Authorization: 'Basic ' + process.env.BASE64_AUTH,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  res.send(response.data);
});

module.exports = app;
