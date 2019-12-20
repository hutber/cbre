import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Nav from 'components/shared/Nav'

import Select from 'pages/Select'
import Input from 'pages/Input'

export default function() {
  return (
    <>
      <Route exact component={Nav} />
      <Switch>
        <Route exact path="/" component={Select} />
        <Route exact path="/select" component={Select} />
        <Route exact path="/input" component={Input} />
      </Switch>
    </>
  )
}
