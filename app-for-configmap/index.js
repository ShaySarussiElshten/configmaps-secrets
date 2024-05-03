const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const message = process.env.MESSAGE || 'Hello, Kubernetes';
  res.send(`[config-map] ${message} (from ${os.hostname()})\n`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});