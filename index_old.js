// const express = require("express");
// const morgan = require("morgan");
// const postsRouter = require("./posts/postRouter");

// const server = express();
// const port = 1337;

// global middleware
// server.use(express.json());
// server.use(morgan("tiny"))
  // server.use(function(req, res, next) {
  // const today = new Date().toISOString(); // YYYY-MM-DD mdn javascript date methods
  // console.log(`[${today}] ${req.method} to ${req.url}. This is a request with string interpolation!`);
  // next();
  // })
// server.use(gate);

server.use('/api/users', gate, role('fellowship'), postsRouter);

function role(roleName) {
   return function(req, res, next) {
    let role = req.headers.role
    if(role === roleName) {
      next();
    } else {
      res.status(403).json({you: 'have no power here'})
      }     
    }
  }

  function addMe(req, res, next) {
    req.name = "---J U N I P E R----";

    next();
  }

server.get('/', addMe, (req, res) => {
  const name = req.name || "stranger";
  res.send(`❤ ❤ ❤ L I V E  ${name} ❤ ❤ ❤`)
})

server.listen(port, () => {
  console.log(`\n ❤ ❤ ❤	 LIVE  ON  ${port} ❤ ❤ ❤	`)
})

function gate(req, res, next) {
  let password = req.headers.password;
  if(password && typeof password === 'string') {
    password = password.toLowerCase();
    password === 'mellon' ? next() : res.status(401).json({ you: 'cannot pass'})
  } else {
    res.status(400).json({ message: 'speak friend and enter'})
  }

  // if(password) {
  //   if (password === "mellon") {
  //     next();
  //   } else {
  //     res.status(401).json({ you: 'cannot pass'})
  //   } 
  // } else {
  //   res.status(400).json({ message: 'speak friend, and enter'})
  // }
  // }
}

// module.exports = server;