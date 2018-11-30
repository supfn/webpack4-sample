import React, {Component} from 'react';
import './index.less';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    login = () => {
        const {history} = this.props;
        new Promise(resolve => {
            setTimeout(resolve, 1000, true)
        }).then(v => {
            if (v) {
                window.localStorage.setItem("userId", '111');
                history.replace("/");
            }
        })
    };

    render() {
        return (
            <div className="login-page">
                <h1>Login Page </h1>
                <input type="button" onClick={this.login} value={"点击登录"}/>

            </div>

        )
    }
}


export default Login;
