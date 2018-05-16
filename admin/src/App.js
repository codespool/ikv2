import React, { Component } from 'react'
import './css/custom.css'
import './css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import Tabs from './components/Tabs'
import Materijali from './components/Materijali'
import Profili from './components/Profili'

class App extends Component {
  state = {
    tabs: ['Narudžbe', 'Materijali', 'Profili'],
    selectedTab: 'Materijali'
  }

  handleTabClick = (tabname) => {
    this.setState({
      selectedTab: tabname
    })
  }

  selectTabContent = (tabName) => {
    const content = {
      Narudžbe: null,
      Materijali: <Materijali />,
      Profili: <Profili />
    }
    return content[tabName]
  }

  render () {
    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title'>Administracija</h1>
          <hr />
          <Tabs
            tabList={this.state.tabs}
            selectedTab={this.state.selectedTab}
            handleTabClick={this.handleTabClick}
          />
          {this.selectTabContent(this.state.selectedTab)}
        </div>

      </section>
    )
  }
}

export default App
