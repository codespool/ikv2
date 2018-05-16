const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')

const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL)
  : new Sequelize('iverpan', 'postgres', 'dubeija', {
    host: 'localhost',
    dialect: 'postgres'
  })
const db = {}

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return file.indexOf('model.js') > 0
  })
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function (modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
