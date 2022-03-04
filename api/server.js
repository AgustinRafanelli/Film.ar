const express = require('express')
const app = express()
const morgan = require('morgan')
//Session
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const LocalSrategy = require('passport-local').Strategy
//Database
const db = require('./config/db')
const router = require('./routes')
const { User } = require('./models')

//midleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))

//passport
app.use(session({ secret: "tmdb" }))
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalSrategy({
    usernameField: "email",
    passwordField: "password"
  },
  function(email, password, done){
    User.findOne({where: {email}})
    .then(user =>{
      if(!user) return done('Wrong email', false)
      user.hash(password, user.salt)
        .then(hash =>{
          if (hash == user.password) return done(null, user)
            return done('Wrong password', false)
        })
    })
    .catch(done)
  })
)

passport.serializeUser(function (user, done) {
  done(null, user.id);
})

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
})

//router
app.use('/api', router)

//Server-up
const PORT = 3001

db.sync({force: false}).then(()=>{
  app.listen(PORT, ()=>console.log(`Escuhando puerto ${PORT}`))
})