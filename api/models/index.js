const User = require('./User')
const Movie = require('./Movie')

User.hasMany(Movie, {as: "favorites"})

module.exports = {User, Movie}

