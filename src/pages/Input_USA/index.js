import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import Input from 'components/form/Input'
import { MuiThemeProvider, useTheme } from '@material-ui/core'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { mergeObjects } from 'utils'
import useStyles from './styles'

export default function SpacingGrid() {
  const classes = useStyles()
  const theme = {
    overrides: {
      MuiInputBase: {
        input: {
          margin: 40,
        },
      },
    },
  }
  const originalTheme = useTheme()
  const mergedThemes = mergeObjects(originalTheme, theme)
  const consolidatedTheme = createMuiTheme(mergedThemes)
  return (
    <Paper className={classes.hutber}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3">
            h1. Heading
          </Typography>
          <List>
            <ListItem>
              <Input label="Standard" />
            </ListItem>
            <MuiThemeProvider theme={consolidatedTheme}>
              <ListItem>
                <Input label="Filled" placeholder="Over Written styles" variant="filled" />
              </ListItem>
              <ListItem>
                <Input
                  label="Outlined"
                  error
                  placeholder="Outlined Box With Error"
                  variant="outlined"
                />
              </ListItem>
            </MuiThemeProvider>
          </List>
        </Grid>
      </Grid>
    </Paper>
  )
}
