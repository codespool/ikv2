import React from 'react'
import {array, func, string} from 'prop-types'

Tabs.PropTypes = {
  tabList: array.isRequired,
  handleTabClick: func.isRequired,
  selectedTab: string.isRequired
}

function Tabs ({ tabList = [], handleTabClick, selectedTab }) {
  return (
    <div className='tabs'>
      <ul>
        {tabList.map(tabName => (
          <li
            className={selectedTab === tabName ? 'is-active' : null}
            onClick={() => handleTabClick(tabName)}
            key={tabName}
          >
            <a>{tabName}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs
