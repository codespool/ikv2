'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'raspored_krila_mtm',
      {
        id,
        created_at,
        updated_at,
        krilo_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'krilo',
            key: 'id'
          }
        },
        raspored_krila_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'raspored_krila',
            key: 'id'
          }
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('raspored_krila_mtm')
  }
}
