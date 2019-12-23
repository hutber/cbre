import React from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { main: '#30b5c8', warn: { main: '#000000' } },
    secondary: { main: '#fadc35' },
  },
  overrides: {
    MuiFormControl: {
      root: {
        width: '100%',
      },
    },
    MuiInputBase: {
      input: {
        padding: 10,
      },
    },
    MuiSelect: {
      root: {
        padding: 30,
        background: '#000',
        color: '#19ff24',
      },
    },
  },
})

export default ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
