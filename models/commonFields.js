const Sequelize = require('sequelize')

module.exports = {
  createdAt: {
    field: 'created_at',
    type: Sequelize.DATE
  },
  updatedAt: {
    field: 'updated_at',
    type: Sequelize.DATE
  },
  foreignKey: function (keyName) {
    return {
      field: keyName,
      type: Sequelize.INTEGER
    }
  }
}
