'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'raspored_ispuna',
      {
        id,
        created_at,
        updated_at,
        broj_ispuna: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        visine_ispuna: {
          type: Sequelize.ARRAY(Sequelize.DECIMAL),
          allowNull: false
        },
        tip: {
          type: Sequelize.ENUM('ZADANI', 'PROIZVOLJNI'),
          allowNull: false
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('raspored_ispuna')
  }
}
