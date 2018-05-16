'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'user',
      {
        id,
        created_at,
        updated_at,
        ime: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        tip: {
          type: Sequelize.ENUM('ADMIN', 'TRGOVAC', 'KUPAC'),
          allowNull: false,
          defaultValue: 'KUPAC'
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('user')
  }
}
