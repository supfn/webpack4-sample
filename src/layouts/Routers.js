import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from './PrivateRoute.js';
import Home from '../page/home';
import List from '../page/list';
import One from '../page/team/one';
import Two from '../page/team/two';
import Login from '../page/login'

import UserList from '../page/user/list';
import UserDetail from '../page/user/detail';

import NotFound from '../page/not_found';
import Greeter from '../page/greeter';

import TodoApp from '../page/todo';

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login}/>
        <PrivateRoute exact path='/' component={Home}/>
        <PrivateRoute exact path='/list' component={List}/>
        <PrivateRoute exact path='/greeter' component={Greeter}/>
        <PrivateRoute exact path='/team/one' component={One}/>
        <PrivateRoute exact path='/team/two' component={Two}/>
        <PrivateRoute exact path='/user/list' component={UserList}/>
        <PrivateRoute exact path='/todo' component={TodoApp}/>
        <PrivateRoute path='/user/detail/:id' component={UserDetail}/>
        <PrivateRoute path='/not_fount' component={NotFound}/>
        <Redirect to='/not_fount'/>
      </Switch>
    )
  }
}
