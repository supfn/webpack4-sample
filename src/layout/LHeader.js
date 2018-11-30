import  React, {Component} from "react";
import {Layout} from 'antd';
import {Route, withRouter} from 'react-router-dom';

const {Header} = Layout;

class LHeader extends Component{

    exit = () => {
        const {history} = this.props;
        setTimeout(() => {
            window.localStorage.removeItem("userId");
            history.replace("/login");
        }, 1000)
    };

    render(){
        return(
            <Header style={{ background: '#fff', padding: 10 }} >
                <input type="button"  value={"退出"} onClick={this.exit}/>
            </Header>
        )
    }
}
export default withRouter(LHeader);
