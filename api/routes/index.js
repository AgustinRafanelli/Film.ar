const express = require('express')
const router = express.Router()
const users = require('./user')
const login = require('./login')
const favorites = require('./favorites')

router.use('/users', users)
router.use('/login', login)
router.use('/favorites', favorites)

module.exports = router