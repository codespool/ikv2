'use strict'
const { id, created_at, updated_at } = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('ispuna', {
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
      materijal_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'materijal',
          key: 'id'
        }
      },
      krilo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'krilo',
          key: 'id'
        }
      },
      orjentacja: {
        type: Sequelize.ENUM('H', 'V'),
        defaultValue: 'H',
        allowNull: false
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('ispuna')
  }
}
