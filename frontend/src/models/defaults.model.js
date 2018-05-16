import { types } from 'mobx-state-tree'

const Defaults = types.model('Defaults', {
  minSvjSirina: 500,
  maxSvjSirina: 5500,
  minSvjVisina: 800,
  maxSvjVisina: 2800,
  minSirinaVrata: 500,
  maxSirinaVrata: 1400,
  minVisinaIspune: 250,
  koeficijent: 5
})

export default Defaults