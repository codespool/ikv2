'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('profil', [
      {
        sifra: 'wingo1-3534',
        naziv: 'Wingo 1',
        sirina: 35,
        gornji_horiz_profil: 21.4,
        gornji_horiz_utor: 9.7,
        donji_horiz_profil: 56.2,
        donji_horiz_utor: 10.3,
        pregradni_profil: 23.8,
        pregradni_utor_gore: 9.7,
        pregradni_utor_dolje: 7.8,
        minus_visina: 45,
        visina_gornje_vodilice: 40,
        visina_donje_vodilice: 8,
        default_boja_id: 47,
        slika: 'assets/images/profili/wingo1.png'
      },
      {
        sifra: 'wingo2-3325',
        naziv: 'Wingo 2',
        sirina: 26,
        gornji_horiz_profil: 21.4,
        gornji_horiz_utor: 9.7,
        donji_horiz_profil: 56.2,
        donji_horiz_utor: 10.3,
        pregradni_profil: 23.8,
        pregradni_utor_gore: 9.7,
        pregradni_utor_dolje: 7.8,
        minus_visina: 45,
        visina_gornje_vodilice: 40,
        visina_donje_vodilice: 8,
        default_boja_id: 47,
        slika: 'assets/images/profili/wingo2.png'
      },
      {
        sifra: 'wingo3-3934',
        naziv: 'Wingo 3',
        sirina: 39,
        gornji_horiz_profil: 21.4,
        gornji_horiz_utor: 9.7,
        donji_horiz_profil: 56.2,
        donji_horiz_utor: 10.3,
        pregradni_profil: 23.8,
        pregradni_utor_gore: 9.7,
        pregradni_utor_dolje: 7.8,
        minus_visina: 45,
        visina_gornje_vodilice: 40,
        visina_donje_vodilice: 8,
        default_boja_id: 47,
        slika: 'assets/images/profili/wingo3.png'
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('DELETE FROM profil')
  }
}
