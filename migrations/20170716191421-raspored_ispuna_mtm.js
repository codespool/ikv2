'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'raspored_ispuna_mtm',
      {
        id,
        created_at,
        updated_at,
        ispuna_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'ispuna',
            key: 'id'
          }
        },
        raspored_ispuna_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'raspored_ispuna',
            key: 'id'
          }
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('raspored_ispuna_mtm')
  }
}
