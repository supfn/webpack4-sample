import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Main from './Main';
import Login from '../page/login'

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/login' component={Login}/>

        <PrivateRoute path='/' component={Main}/>

        <Redirect to='/'/>
      </Switch>
    )
  }
}
