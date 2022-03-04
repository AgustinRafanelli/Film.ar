const express = require('express')
const router = express.Router()
const {User} = require('../models/index')

router.get('/', (req, res, next)=>{
  User.findAll()
    .then(users => res.send(users))
    .catch(next)
})

router.get('/:id', (req, res, next)=> {
  User.findOne({where: {id: req.params.id}})
    .then(user => res.send({
      id: user.id,
      name: user.name,
      email: user.email,
      favCount: user.favCount
    }))
    .catch(next)
})

router.put('/:id/plus', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => user.update({ favCount: user.favCount + 1}))
    .then(user => res.send({
      id: user.id,
      name: user.name,
      email: user.email,
      favCount: user.favCount
    }))
    .catch(next)
})

router.put('/:id/minus', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => user.update({ favCount: user.favCount - 1 }))
    .then(user => res.send({
      id: user.id,
      name: user.name,
      email: user.email,
      favCount: user.favCount
    }))
    .catch(next)
})

router.post('/', (req, res, next)=>{
  User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(next)
})

module.exports = router