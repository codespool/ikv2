import React, { Component } from 'react'
import SketchContainer from './containers/SketchContainer'
import { observer } from 'mobx-react'

@observer
export default class App extends Component {

  render () {
    const {store} = this.props
    return (
      <div className='section'>
        <div className='container'>
          <h1 className='title'>Dizajner vrata</h1>
          <hr />
        </div>
        <div className='container'>
          <div className='columns is-gapless is-centered'>
            <div className='column is-three-quarters'>
              <SketchContainer store={store} />
            </div>
            <div className='column is-one-quarter'>
              <pre>
                {JSON.stringify(this.props.store, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
