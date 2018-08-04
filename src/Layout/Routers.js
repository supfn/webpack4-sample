import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../page/home';
import List from '../page/list';
import One from '../page/team/one';
import Two from '../page/team/two';

import UserList from '../page/user/list';
import UserDetail from '../page/user/detail';

import NotFound from '../page/not_found';
import Greeter from '../page/greeter';

export default class Routers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/list' component={List}/>
                <Route exact path='/greeter' component={Greeter}/>
                <Route exact path='/team/one' component={One}/>
                <Route exact path='/team/two' component={Two}/>
                <Route exact path='/user/list' component={UserList}/>
                <Route path='/user/detail/:id' component={UserDetail}/>
                <Route path='/not_fount' component={NotFound}/>
                <Redirect to='/not_fount' />
            </Switch>
        )
    }
}
