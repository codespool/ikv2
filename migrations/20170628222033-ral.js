'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'ral',
      {
        id,
        created_at,
        updated_at,
        oznaka: {
          type: Sequelize.STRING,
          allowNull: false
        },
        boja: {
          type: Sequelize.STRING,
          allowNull: false
        },
        eng_naziv: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('ral')
  }
}
