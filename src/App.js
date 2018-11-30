import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {LSider, LHeader, LContent, LFooter} from './layout'

export default class App extends Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout>
                    <LSider />
                    <Layout style={{ marginLeft: 200, minWidth: 1000 }}>
                        <LHeader />
                        <LContent />
                        <LFooter />
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}





