import  React, {Component} from "react";
import {Layout} from 'antd';
import {withRouter} from 'react-router-dom';
import {Button} from "antd";
import './LHeader.less';


const {Header} = Layout;

class LHeader extends Component{

    state = {
        logoutLoading: false,
    };

    exit = () => {
        this.setState({logoutLoading: true});
        const {history} = this.props;
        setTimeout(() => {
            window.localStorage.removeItem("userId");
            history.replace("/login");
            this.setState({logoutLoading: false});
        }, 1000)
    };

    render(){
        const {logoutLoading} = this.state;
        return(
            <Header style={{ background: '#fff', padding: 10 }} className="__L-header">
                <div className="__L-header-right">
                    <Button icon="logout" onClick={this.exit} size="small" className="logout" loading={logoutLoading}>Logout</Button>
                </div>
            </Header>
        )
    }
}
export default withRouter(LHeader);
