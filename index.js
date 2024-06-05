const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to get the generated data
app.get('/data', (req, res) => {
  const data = fs.readFileSync('data/data.json', 'utf-8');
  res.json(JSON.parse(data));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
