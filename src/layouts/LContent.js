import React, {Component} from "react";
import {Layout} from 'antd';
import {Redirect, Switch} from "react-router-dom";
import {LoadablePages} from "src/page/LoadablePages";
import PrivateRoute from "./PrivateRoute";
const { Content } = Layout;
const { Home, List, Greeter, One, Two, TodoApp, UserList, UserDetail } = LoadablePages;

export default class LContent extends Component {
  render() {
    return (
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <main style={{ padding: 24, minHeight: 360, background: '#fff' }}>
          <Switch>
            <PrivateRoute exact path='/' key='/' component={Home}/>

            <PrivateRoute exact path='/list' key='/list' component={List}/>
            <PrivateRoute exact path='/greeter' key='/greeter' component={Greeter}/>
            <PrivateRoute exact path='/team/one' key='/team/one' component={One}/>
            <PrivateRoute exact path='/team/two' key='/team/two' component={Two}/>
            <PrivateRoute exact path='/todo' key='/todo' component={TodoApp}/>
            <PrivateRoute exact path='/user/list' key='/user/list' component={UserList}/>
            <PrivateRoute path='/user/detail/:id' key='/user/detail/:id' component={UserDetail}/>

            <Redirect to='/'/>
          </Switch>
        </main>
      </Content>
    )
  }
}
