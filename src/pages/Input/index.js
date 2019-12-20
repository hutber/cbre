import React from 'react'

import Grid from '@material-ui/core/Grid'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'

import Input from 'components/form/Input'
import useStyles from './styles'

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2)
  const classes = useStyles()

  const handleChange = event => {
    setSpacing(Number(event.target.value))
  }

  return (
    <Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            <Grid item>
              <Input label="Standard" />
            </Grid>
            <Grid item>
              <Input label="Filled" variant="filled" className={classes.hutber} />
            </Grid>
            <Grid item>
              <Input label="Outlined" variant="outlined" className={classes.hutber} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}
