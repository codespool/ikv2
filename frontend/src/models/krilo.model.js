import { types } from 'mobx-state-tree'
import Ispuna from './ispuna.model'

const Krilo = types.model('Ispuna', {
  autoSirina: types.boolean,
  vodilica: types.number,
  prazno: types.boolean,
  sirina: types.number,
  ispune: types.optional(types.array(Ispuna), [])
})

export default Krilo
