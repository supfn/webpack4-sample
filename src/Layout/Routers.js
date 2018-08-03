import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../page/home';
import List from '../page/list';
import One from '../page/team/one';
import Two from '../page/team/two';
import Alex from '../page/user/alex';
import Bill from '../page/user/bill';
import Tom from '../page/user/tom';
import NotFound from '../page/not_found'
import Greeter from '../page/greeter'

export default class Routers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/list' component={List}/>
                <Route exact path='/greeter' component={Greeter}/>
                <Route exact path='/team/one' component={One}/>
                <Route exact path='/team/two' component={Two}/>
                <Route exact path='/user/alex' component={Alex}/>
                <Route exact path='/user/bill' component={Bill}/>
                <Route exact path='/user/tom' component={Tom}/>
                <Route path='/not_fount' component={NotFound}/>
                <Redirect to='/not_fount' />
            </Switch>
        )
    }
}
