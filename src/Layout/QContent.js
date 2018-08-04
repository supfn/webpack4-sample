import React, {Component} from "react";
import {Layout} from 'antd';
import Router from "./Routers.js";

const {Content} = Layout;

export default class QContent extends Component {
    render() {
        return (
            <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                <main style={{padding: 24, minHeight: 360, background: '#fff'}}>
                    <Router/>
                    <div style={{textAlign: 'center'}}>
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>...
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>Really
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>long
                        <br/>...<br/>...<br/>...<br/>...<br/>...<br/>content
                    </div>
                </main>
            </Content>
        )
    }
}