import React, {Component} from 'react';
import LSider from "./LSider";
import {Layout} from "antd";
import LHeader from "./LHeader";
import LContent from "./LContent";
import LFooter from "./LFooter";

export default class Main extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <LSider/>
        <Layout style={{ marginLeft: 200, minWidth: 1000 }}>
          <LHeader/>
          <LContent/>
          <LFooter/>
        </Layout>
      </Layout>
    )
  }
}
