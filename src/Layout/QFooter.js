import  React, {Component} from "react";
import {Layout} from 'antd';

const {Footer} = Layout;

export default class QFooter extends Component{
    render(){
        return(
            <Footer style={{ textAlign: 'center' , background: '#5f6299'}}>
                Ant Design ©2016 Created by Ant UED
            </Footer>
        )
    }
}