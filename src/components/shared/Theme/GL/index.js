import React from 'react'
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
  const consolidatedTheme = createMuiTheme({
    ...originalTheme,
    ...theme,
    overrides: {
      ...originalTheme.overrides,
      MuiSelect: {
        ...originalTheme.overrides.MuiSelect,
        root: {
          ...originalTheme.overrides.MuiSelect.root,
          ...theme.overrides.MuiSelect.root,
        },
      },
    },
  })
  return <MuiThemeProvider theme={consolidatedTheme}>{children}</MuiThemeProvider>
}
