'use strict'
const { id, created_at, updated_at } = require('../helpers/migrations')

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('profil', {
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
      sirina: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      gornji_horiz_profil: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      gornji_horiz_utor: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      donji_horiz_profil: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      donji_horiz_utor: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      pregradni_profil: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      pregradni_utor_dolje: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      pregradni_utor_gore: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      minus_visina: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      visina_gornje_vodilice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      visina_donje_vodilice: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      default_boja_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'ral',
          key: 'id'
        }
      },
      slika: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('profil')
  }
}
