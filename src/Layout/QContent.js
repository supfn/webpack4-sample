import  React, {Component} from "react";
import {Layout} from 'antd';
import Router from "./Routers.js";

const {Content} = Layout;

export default class QContent extends Component{
    render(){
        return(
            <Content style={{ background: '#f09ba7' }}>
                <main style={{ padding: 24, minHeight: 360 }}>
                    <Router />
                </main>
            </Content>
        )
    }
}