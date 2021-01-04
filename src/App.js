import React, { Component } from 'react'
import {Route,BrowserRouter as Router,Switch, Redirect} from "react-router-dom";
import Home from './components/Home';
import Login from'./components/Login'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
