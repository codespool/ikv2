'use strict'
const {id, created_at, updated_at} = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'vrata',
      {
        id,
        created_at,
        updated_at,
        svijetla_visina: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        svijetla_sirina: {
          type: Sequelize.DECIMAL,
          allowNull: false
        },
        profil_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'profil',
            key: 'id'
          }
        },
        profil_boja_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'ral',
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
    return queryInterface.dropTable('vrata')
  }
}
