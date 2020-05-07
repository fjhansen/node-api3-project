const express = require("express");
const morgan = require("morgan");
const postsRouter = require("./posts/postRouter");

const server = express();
// const port = 1337;

// global middleware
server.use(logger);

server.get('/', (req, res) => {
  console.log('H O M E')
  res.send(`❤ ❤ ❤ H O M E ❤ ❤ ❤`)
})

function logger(req, res, next) {
  const today = new Date().toTimeString();
  console.log(`[${today}] ${req.method} to ${req.url}.`);
  next()
}

server.listen(port, () => {
  console.log(`\n ❤ ❤ ❤	 LIVE  ON  ${port} ❤ ❤ ❤	`)
})

// module.exports = server;