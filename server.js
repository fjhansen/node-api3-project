const express = require('express');

const server = express();


// server.use(logger);

server.get('/', (req, res) => {
  console.log('H O M E')
  res.send(`❤ ❤ ❤ H O M E ❤ ❤ ❤`)
});

//custom middleware

server.logger = function logger(req, res, next) {
  const today = new Date().toTimeString();
  console.log(`[${today}] ${req.method} to ${req.url}.`);
  next()
}

module.exports = server;
