import  React, {Component} from "react";
import {Layout} from 'antd';

const {Header} = Layout;

export default class QHeader extends Component{
    render(){
        return(
            <Header style={{ background: '#eee', padding: 10 }} > Header </Header>
        )
    }
}