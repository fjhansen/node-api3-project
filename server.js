const express = require('express');

const server = express();
const port = 1337;

server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  const today = new Date().toTimeString();
  console.log(`[${today}] ${req.method} to ${req.url}.`);
  next()
}

server.listen(port, () => {
  console.log(`\n ❤ ❤ ❤	 LIVE  ON  ${port} ❤ ❤ ❤	`)
})

module.exports = server;
