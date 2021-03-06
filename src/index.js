import React from 'react'
import ReactDOM from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'

import { GlobalTheme } from 'components/shared/Theme'

import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <>
    <CssBaseline />
    <GlobalTheme>
      <App />
    </GlobalTheme>
  </>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
