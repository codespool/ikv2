'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('ral', [
      { oznaka: 'RAL 1003', boja: '#E5BE01', eng_naziv: 'Signal yellow' },
      { oznaka: 'RAL 1011', boja: '#8A6642', eng_naziv: 'Brown beige' },
      { oznaka: 'RAL 1013', boja: '#EAE6CA', eng_naziv: 'Oyster white' },
      { oznaka: 'RAL 1015', boja: '#E6D690', eng_naziv: 'Light ivory' },
      { oznaka: 'RAL 1016', boja: '#EDFF21', eng_naziv: 'Sulfur yellow' },
      { oznaka: 'RAL 2004', boja: '#F44611', eng_naziv: 'Pure orange' },
      { oznaka: 'RAL 2009', boja: '#F54021', eng_naziv: 'Traffic orange' },
      { oznaka: 'RAL 3000', boja: '#AF2B1E', eng_naziv: 'Flame red' },
      { oznaka: 'RAL 3005', boja: '#5E2129', eng_naziv: 'Wine red' },
      { oznaka: 'RAL 3009', boja: '#642424', eng_naziv: 'Oxide red' },
      { oznaka: 'RAL 3011', boja: '#781F19', eng_naziv: 'Brown red' },
      { oznaka: 'RAL 3013', boja: '#A12312', eng_naziv: 'Tomato red' },
      { oznaka: 'RAL 3016', boja: '#B32821', eng_naziv: 'Coral red' },
      { oznaka: 'RAL 3020', boja: '#CC0605', eng_naziv: 'Traffic red' },
      { oznaka: 'RAL 4007', boja: '#4A192C', eng_naziv: 'Purple violet' },
      { oznaka: 'RAL 4008', boja: '#924E7D', eng_naziv: 'Signal violet' },
      { oznaka: 'RAL 4010', boja: '#CF3476', eng_naziv: 'Telemagenta' },
      { oznaka: 'RAL 5000', boja: '#354D73', eng_naziv: 'Violet blue' },
      { oznaka: 'RAL 5002', boja: '#20214F', eng_naziv: 'Ultramarine blue' },
      { oznaka: 'RAL 5012', boja: '#3B83BD', eng_naziv: 'Light blue' },
      { oznaka: 'RAL 5014', boja: '#606E8C', eng_naziv: 'Pigeon blue' },
      { oznaka: 'RAL 5015', boja: '#2271B3', eng_naziv: 'Sky blue' },
      { oznaka: 'RAL 5017', boja: '#063971', eng_naziv: 'Traffic blue' },
      { oznaka: 'RAL 5018', boja: '#3F888F', eng_naziv: 'Turquoise blue' },
      { oznaka: 'RAL 6005', boja: '#2F4538', eng_naziv: 'Moss green' },
      { oznaka: 'RAL 6018', boja: '#57A639', eng_naziv: 'Yellow green' },
      { oznaka: 'RAL 6021', boja: '#89AC76', eng_naziv: 'Pale green' },
      { oznaka: 'RAL 6029', boja: '#20603D', eng_naziv: 'Mint green' },
      { oznaka: 'RAL 7010', boja: '#4C514A', eng_naziv: 'Tarpaulin grey' },
      { oznaka: 'RAL 7011', boja: '#434B4D', eng_naziv: 'Iron grey' },
      { oznaka: 'RAL 7015', boja: '#434750', eng_naziv: 'Slate grey' },
      { oznaka: 'RAL 7032', boja: '#B8B799', eng_naziv: 'Pebble grey' },
      { oznaka: 'RAL 7035', boja: '#D7D7D7', eng_naziv: 'Light grey' },
      { oznaka: 'RAL 7037', boja: '#7D7F7D', eng_naziv: 'Dusty grey' },
      { oznaka: 'RAL 7038', boja: '#B5B8B1', eng_naziv: 'Agate grey' },
      { oznaka: 'RAL 7040', boja: '#9DA1AA', eng_naziv: 'Window grey' },
      { oznaka: 'RAL 7043', boja: '#4E5452', eng_naziv: 'Traffic grey B' },
      { oznaka: 'RAL 7047', boja: '#D0D0D0', eng_naziv: 'Telegrey 4' },
      { oznaka: 'RAL 8001', boja: '#955F20', eng_naziv: 'Ochre brown' },
      { oznaka: 'RAL 8014', boja: '#382C1E', eng_naziv: 'Sepia brown' },
      { oznaka: 'RAL 8015', boja: '#633A34', eng_naziv: 'Chestnut brown' },
      { oznaka: 'RAL 8017', boja: '#45322E', eng_naziv: 'Chocolate brown' },
      { oznaka: 'RAL 8019', boja: '#403A3A', eng_naziv: 'Grey brown' },
      { oznaka: 'RAL 9002', boja: '#E7EBDA', eng_naziv: 'Grey white' },
      { oznaka: 'RAL 9003', boja: '#F4F4F4', eng_naziv: 'Signal white' },
      { oznaka: 'RAL 9005', boja: '#0A0A0A', eng_naziv: 'Jet black' },
      { oznaka: 'RAL 9006', boja: '#A5A5A5', eng_naziv: 'White aluminium' },
      { oznaka: 'RAL 9007', boja: '#8F8F8F', eng_naziv: 'Grey aluminium' },
      { oznaka: 'RAL 9010', boja: '#FFFFFF', eng_naziv: 'Pure white' },
      { oznaka: 'RAL 9016', boja: '#F6F6F6', eng_naziv: 'Traffic white' }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('DELETE FROM ral')
  }
}
