const express = require('express');
const userDb = require('./userDb')
const postDb = require('../posts/postDb')
const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  userDb.get()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      errorMessage: 'Error getting the posts'
    })
  })
});

router.get('/:id', validateUserId, (req, res) => {
  userDb.getById(req.params.id)
  .then(users => {
    if (users) {
      res.status(200).json(users)
    } else {
    res.status(500).json({
      errorMessage: 'The post info could not be retrieved'
    })}
  })
});

router.get('/:id/posts', (req, res) => {
  userDb.getUserPosts(req.params.id)
  .then(users => {
    if(users) {
      res.status(200).json(users)
    } else {
      res.status(404).json({message: 'The post with the specified ID does not exist'})
    }
  })
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  userDb.remove(id)
  .then(user => {
    if (user) {
      res.status(200).json({ message: 'user deleted'})
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({errorMessage: 'User could not be deleted'})
  })
});

router.put('/:id', (req, res) => {
  const theUser = req.body
  const id = req.params.id

  if (!theUser.name) {
    res.status(400).json({
      errorMessage: 'Please provide name for user'
    })
  } else {
    userDb.update(id, theUser)
    .then(user => {
      if (user) {
        res.status(200).json(theUser)
      } else {
        res.status(404).json({
          message: 'The user with specific ID does not exist'
        })
      }
    })
  }
});

//custom middleware

function validateUserId(req, res, next) {
  const id = req.params.id
  userDb.getById(id)
  .then(id => {
    if (id) {
      console.log('success')
      next()
    } else {
      res.status(400).json({
        error: 'invalid ID'
      })
    }
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({
      errorMessage: 'Could not validate user ID'
    })
  })
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
