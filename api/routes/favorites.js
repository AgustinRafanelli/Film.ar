const express = require('express')
const router = express.Router()
const { User , Movie } = require('../models/index')


router.post('/', (req, res, next)=>{
  /* Movie.findOrCreate({
    where: {movieId: req.body.movieId},
    defaults: {
      name: req.body.name,
      movieId: req.body.movieId
    }
  }) */
  Movie.create({
    name: req.body.name,
    movieId: req.body.movieId
  })
    .then((movie) => {
      User.findOne({ where: { id: req.query.userId}})
        .then(user => user.addFavorites(movie))
    })
    .then(()=> res.sendStatus(204))
    .catch(next)
})

router.delete('/', (req, res, next)=>{
  Movie.findOne({ where: { movieId: req.query.movieId, userId: req.query.userId } })
    .then(movie => movie.destroy())
    .then(() => res.sendStatus(202))
    .catch(next)
})

router.get('/:id', (req, res, next) => {
  Movie.findAll({ where: { userId: req.params.id } })
    .then(movies => res.status(200).send(movies))
    .catch(next)
})

module.exports = router