import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

export default function ButtonAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/select">
            <Button>Select</Button>
          </Link>
          <Link to="/input">
            <Button>Input</Button>
          </Link>
          <Link to="/input_usa">
            <Button>Input USA</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
