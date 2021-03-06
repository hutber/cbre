import React from 'react'
import { mergeObjects } from 'utils'
import { MuiThemeProvider, useTheme } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = {
  overrides: {
    MuiSelect: {
      root: {
        background: '#493',
        color: '#fff',
      },
    },
  },
}

export default ({ children }) => {
  const originalTheme = useTheme()
  const merged = mergeObjects(originalTheme, theme)
  const consolidatedTheme = createMuiTheme(merged)
  return <MuiThemeProvider theme={consolidatedTheme}>{children}</MuiThemeProvider>
}
