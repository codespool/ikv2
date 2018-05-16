const Sequelize = require('sequelize')

module.exports = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  created_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date()
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: new Date()
  }
}
