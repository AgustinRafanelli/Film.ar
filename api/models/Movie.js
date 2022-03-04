const S = require('sequelize')
const db = require('../config/db')
const bcrypt = require('bcrypt')

class Movie extends S.Model { }

Movie.init({
  name: {
    type: S.STRING,
    allowNull: false
  },
  movieId: {
    type: S.INTEGER,
    allowNull: false
  }
}, { sequelize: db, modelName: 'movies' })

module.exports = Movie