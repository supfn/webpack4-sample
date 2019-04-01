import React, {Component} from "react";
import {Layout} from 'antd';
import {Redirect, Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../page/home";
import List from "../page/list";
import Greeter from "../page/greeter";
import One from "../page/team/one";
import Two from "../page/team/two";
import UserList from "../page/user/list";
import TodoApp from "../page/todo";
import UserDetail from "../page/user/detail";

const { Content } = Layout;

export default class LContent extends Component {
  render() {
    return (
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <main style={{ padding: 24, minHeight: 360, background: '#fff' }}>
          <Switch>
            <PrivateRoute exact path='/' component={Home}/>

            <PrivateRoute exact path='/list' component={List}/>
            <PrivateRoute exact path='/greeter' component={Greeter}/>
            <PrivateRoute exact path='/team/one' component={One}/>
            <PrivateRoute exact path='/team/two' component={Two}/>
            <PrivateRoute exact path='/user/list' component={UserList}/>
            <PrivateRoute exact path='/todo' component={TodoApp}/>
            <PrivateRoute path='/user/detail/:id' component={UserDetail}/>

            <Redirect to='/'/>
          </Switch>
        </main>
      </Content>
    )
  }
}
