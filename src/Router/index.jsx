import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Demo from '../Components/Demo'

export default class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/index" component={Demo} />
      </Router>
    )
  }
}
