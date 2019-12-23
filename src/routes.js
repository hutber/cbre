import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Nav from 'components/shared/Nav'

import Select from 'pages/Select'
import Input from 'pages/Input'
import InputUSA from 'pages/Input_USA'
import { GlobalListingTheme } from './components/shared/Theme'

export default function() {
  return (
    <>
      <Route exact component={Nav} />
      <Switch>
        <Route exact path="/input_usa" component={InputUSA} />
      </Switch>
      <Switch>
        <Route exact path="/" component={Select} />
        <GlobalListingTheme>
          <Route exact path="/select" component={Select} />
          <Route exact path="/input" component={Input} />
        </GlobalListingTheme>
      </Switch>
    </>
  )
}
