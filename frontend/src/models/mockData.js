export default {
  defaults: {
    minSvjSirina: 500,
    maxSvjSirina: 5500,
    minSvjVisina: 800,
    maxSvjVisina: 2800,
    minSirinaVrata: 500,
    maxSirinaVrata: 1400,
    minVisinaIspune: 250,
    koeficijent: 5
  },
  vrata: {
    svjSirina: 3000,
    svjVisina: 2000,
    brVrata: 3,
    tipProfila: 'wingo1-3534',
    sifra: 'FFBE09-20171002',
    visinaHorizProfila: 22,
    krila: [
      {
        ispune: [
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 609
          },
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 609
          },
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 609
          }
        ],
        autoSirina: true,
        vodilica: 0,
        prazno: false,
        sirina: 1021
      },
      {
        ispune: [
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 926
          },
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 926
          }
        ],
        autoSirina: true,
        vodilica: 1,
        prazno: false,
        sirina: 1021
      },
      {
        ispune: [
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 609
          },
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 609
          },
          {
            vrstaMaterijala: 'empty',
            autoVisina: true,
            rotirano: false,
            vidljivaSirina: 951,
            vidljivaVisina: 609
          }
        ],
        autoSirina: true,
        vodilica: 0,
        prazno: false,
        sirina: 1021
      }
    ],
    rasporedVrata: [0, 1, 0],
    brPregradaMin: 0,
    brPregradaMax: 0,
    bojaProfila: {
      oznaka: 'RAL 9006',
      boja: '#A5A5A5',
      engNaziv: 'White aluminium'
    }
  }
}
