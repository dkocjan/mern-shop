const express = require('express');

// Config
const PORT = 4000;

// Set up express app
const app = express();

// Listen for requests
app.listen(process.env.port || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
