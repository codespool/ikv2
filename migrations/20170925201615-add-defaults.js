'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('defaults', [
      {
        min_svijetla_sirina: 500,
        max_svijetla_sirina: 5500,
        min_svijetla_visina: 800,
        max_svijetla_visina: 2800,
        min_sirina_krila: 500,
        max_sirina_krila: 1400,
        min_visina_ispune: 250
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('DELETE FROM defaults')
  }
}
