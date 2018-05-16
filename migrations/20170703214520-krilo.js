'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'krilo',
      {
        id,
        created_at,
        updated_at,
        visina: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        sirina: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        raspored_ispuna_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'raspored_ispuna',
            key: 'id'
          }
        },
        vrata_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'vrata',
            key: 'id'
          }
        },
        pozicija: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('krilo')
  }
}
