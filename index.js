const express = require("express"); 
const postsRouter = require("./posts/postRouter")

const server = express();
const port = 1337;

// global middleware
server.use(express.json());

server.use(function(req, res, next) {
  const today = new Date().toISOString(); // YYYY-MM-DD mdn javascript date methods
  console.log(`[${today}] This is a request with string interpolation!`);
  next();
})
server.use('/api/users', postsRouter);

server.get('/', (req, res) => {
  res.send('❤ ❤ ❤ L I V E ❤ ❤ ❤')
})

server.listen(port, () => {
  console.log(`\n ❤ ❤ ❤	 LIVE  ON  ${port} ❤ ❤ ❤	`)
})
