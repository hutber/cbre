import React from 'react'
import { mergeObjects } from 'utils'
import { MuiThemeProvider, useTheme } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = {
  overrides: {
    MuiInputBase: {
      input: {
        padding: 40,
      },
    },
  },
}

export default ({ children }) => {
  const originalTheme = useTheme()
  const mergedThemes = mergeObjects(originalTheme, theme)
  const consolidatedTheme = createMuiTheme(mergedThemes)
  return <MuiThemeProvider theme={consolidatedTheme}>{children}</MuiThemeProvider>
}
