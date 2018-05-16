'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'narudzba',
      {
        id,
        created_at,
        updated_at,
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
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
        status: {
          type: Sequelize.ENUM('NARUCENO', 'ODOBRENO', 'PLACENO', 'ISPORUCENO'),
          defaultValue: 'NARUCENO',
          allowNull: false
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('narudzba')
  }
}
