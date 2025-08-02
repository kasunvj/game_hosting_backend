const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the 'public' folder
app.use(express.static('public'));

// API endpoint to get games
app.get('/api/games', (req, res) => {
  fs.readFile(path.join(__dirname, 'games.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading games.json:', err);
      return res.status(500).json({ error: 'Failed to read game data' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
