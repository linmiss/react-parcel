import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Demo from '../Components/Demo'

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route exact path="/index" component={Demo} />
        </Switch>
      </Router>
    )
  }
}
