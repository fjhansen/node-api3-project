const express = require('express');
const middleware = require('./server.js');
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter')
const port = 1337;
const server = express();

// global middleware
server.use(express.json())
server.use(middleware.logger);

// routers
server.use('/api/users', userRouter);
server.use('/api/posts', postRouter);

// first endpoint

server.get('/', (req, res) => {
  console.log('H O M E')
  res.send(`❤ ❤ ❤ H O M E ❤ ❤ ❤`)
})

// listener
server.listen(port, () => {
  console.log(`\n ❤ ❤ ❤	 LIVE  ON  ${port} ❤ ❤ ❤	`)
})
