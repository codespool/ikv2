import { types, getEnv, process } from 'mobx-state-tree'
import Defaults from '../models/defaults.model'
import Krilo from '../models/krilo.model'
import Profil from '../models/profil.model'

const RootStore = types
  .model('RootStore', {
    defaults: types.optional(Defaults, {}),
    profiliList: types.optional(types.array(Profil), []),
    svjSirina: 3000,
    svjVisina: 2000,
    brVrata: 3,
    tipProfila: 'wingo1-3534',
    sifra: 'FFBE09-20171002',
    visinaHorizProfila: 22,
    krila: types.optional(types.array(Krilo), []),
    bojaProfila: '#A5A5A5',
    selectedProfil: types.maybe(types.reference(Profil))
  })
  .views(self => ({
    get HTTP () {
      return getEnv(self).HTTP
    }
  }))
  .actions(self => {
    function updateProfiliList (profiliData) {
      self.profiliList.clear()
      profiliData.forEach(profil => {
        self.profiliList.push(parseNums(profil))
      })
    }
    const loadProfili = process(function * loadProfili () {
      try {
        const {data} = yield self.HTTP.get('/api/profili')
        updateProfiliList(data)
      } catch (err) {
        console.error('Failed to load profili ', err)
      }
    })
    return {
      loadProfili,
      afterCreate () {
        loadProfili()
      }
    }
  })

export default RootStore

function parseNums (jsonData) {

  for (let key in jsonData) {
    try {
      jsonData[key] = JSON.parse(jsonData[key])
    } catch (err) {
      console.log('Skipped parsing string on: ', key)
    }
  }
  return jsonData
}
