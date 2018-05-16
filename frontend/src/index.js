import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bulma/css/bulma.css'
import './css/styles.css'
import DevTools from 'mobx-react-devtools'
import RootStore from './stores/root.store'
import axios from 'axios'
// TODO: instantiate store
// wrap app in provider
const store = RootStore.create(
  {},
  {
    HTTP: axios
  }
)

ReactDOM.render(<div><DevTools /><App store={store} /> </div>, document.getElementById('root'))
