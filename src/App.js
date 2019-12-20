import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Routes from 'routes.js'

import { GlobalListingTheme } from 'components/shared/Theme'

const history = createBrowserHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <GlobalListingTheme>
          <Routes />
        </GlobalListingTheme>
      </Router>
    </div>
  )
}

export default App
