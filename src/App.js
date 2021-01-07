import React, { Component } from 'react'
import {Route,BrowserRouter as Router,Switch, Redirect} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login'
import Stays from './components/Stays';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path='/stays' component={Stays}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
