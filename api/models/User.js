const S = require('sequelize')
const db = require('../config/db')
const bcrypt = require('bcrypt')

class User extends S.Model {}

User.init({
  name:{
    type: S.STRING,
    allowNull: false
  },
  email: {
    type: S.DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  favCount:{
    type: S.DataTypes.INTEGER,
    defaultValue: 0
  },
  password:{
    type: S.DataTypes.STRING,
    allowNull: false
  },
  salt:{
    type: S.DataTypes.STRING
  }
}, { sequelize: db, modelName: 'users'})

User.prototype.hash = (password, salt)=>{
  return bcrypt.hash(password, salt)
}

User.prototype.plus = function (){
  this.favCount++
  this.save()
  return this
}

User.beforeCreate((user =>{
  return bcrypt
    .genSalt(16)
    .then(salt=>{
      user.salt = salt
      return user.hash(user.password, user.salt)
    })
    .then(hash => user.password = hash)
}))

module.exports = User 