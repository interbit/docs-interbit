import React, { Component } from 'react'
import { Header, Logo, IBIcon } from 'interbit-ui-components'
// ...

export default class App extends Component {
  render() {
    return (
      <div className="App ibweb app-interbit-io">
        <Header
          navItems={navigation.headerNav}
          logo={<Logo className="sm hidden-xs" />}
          logoSm={<IBIcon className="visible-xs hidden-sm" />}
        />
        {/* ... */}
      </div>
    )
  }
}