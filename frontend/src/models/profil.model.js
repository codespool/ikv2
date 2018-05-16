import { types } from 'mobx-state-tree'

const Profil = types
.model('Ispuna', {
  id: types.identifier(types.number),
  sifra: types.string,
  naziv: types.string,
  sirina: types.number,
  gornjiHorizProfil: types.number,
  gornjiHorizUtor: types.number,
  donjiHorizProfil: types.number,
  donjiHorizUtor: types.number,
  pregradniProfil: types.number,
  pregradniUtorGore: types.number,
  pregradniUtorDolje: types.number,
  minusVisina: types.number,
  visinaGornjeVodilice: types.number,
  visinaDonjeVodilice: types.number,
  slika: types.string
})

export default Profil
