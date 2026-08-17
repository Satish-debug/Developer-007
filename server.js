const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// CORS fix
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

let visitors = 7; // Starting count

// Visitor API - Yo thapeko ho!
app.get('/api/visitors', (req, res) => {
  visitors++;
  res.json({ count: visitors });
});

// Timro secret API
app.get('/api/secret', (req, res) => {
  res.json({ message: "Yo my secret API is working! - Developer 007" });
});

// Frontend dekhauna - YEI MISSING THIYO!
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;