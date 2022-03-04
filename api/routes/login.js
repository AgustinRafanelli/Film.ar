const express = require('express')
const router = express.Router()
const passport = require('passport')
const { User } = require('../models/index')

router.post('/', passport.authenticate('local'), function (req, res) {
    res.send({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      favCount: req.user.favCount
    });
});

router.post('/out', (req, res) => {
  req.logOut()
  res.end()
})

router.get('/me', (req, res) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.sendStatus(401)
  }
})

module.exports = router