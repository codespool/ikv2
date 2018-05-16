'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'defaults',
      {
        id,
        created_at,
        updated_at,
        min_svijetla_sirina: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        max_svijetla_sirina: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        min_svijetla_visina: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        max_svijetla_visina: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        min_sirina_krila: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        max_sirina_krila: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        min_visina_ispune: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('defaults')
  }
}
