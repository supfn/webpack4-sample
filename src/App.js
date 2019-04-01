import React, {Component} from 'react';
import {Layout} from 'antd';
import Routers from './layouts/Routers';

export default class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Routers/>
      </Layout>
    );
  }
}





