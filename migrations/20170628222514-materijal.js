'use strict'
const { id, created_at, updated_at } = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('materijal', {
      id,
      created_at,
      updated_at,
      sifra: {
        type: Sequelize.STRING,
        allowNull: false
      },
      naziv: {
        type: Sequelize.STRING,
        allowNull: false
      },
      puni_naziv: {
        type: Sequelize.STRING
      },
      debljina: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      debljina_brtve: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tekstura: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vrsta: {
        type: Sequelize.STRING,
        allowNull: false
      },
      vrsta_materijala: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('materijal')
  }
}
