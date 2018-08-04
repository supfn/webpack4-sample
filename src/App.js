import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {QSider, QHeader, QContent, QFooter} from './Layout'
const { Header, Content, Footer, Sider } = Layout;
export default class App extends Component {
    render() {

        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Layout>
                    <QSider />
                    <Layout style={{ marginLeft: 200, minWidth: 1000 }}>
                        <QHeader />
                        <QContent />
                        <QFooter />
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}





