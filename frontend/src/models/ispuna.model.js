import { types } from 'mobx-state-tree'

const Ispuna = types.model('Ispuna', {
  vrstaMaterijala: types.optional(types.string, ''),
  autoVisina: types.boolean,
  rotirano: types.boolean,
  vidljivaSirina: types.number,
  vidljivaVisina: types.number
})

export default Ispuna
