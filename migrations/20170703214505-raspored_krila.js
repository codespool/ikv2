'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'raspored_krila',
      {
        id,
        created_at,
        updated_at,
        broj_krila: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        broj_vodilica: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        raspored: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
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
    return queryInterface.dropTable('raspored_krila')
  }
}
