const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`The API Key is: ${process.env.API_KEY}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});