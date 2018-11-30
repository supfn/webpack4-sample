import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: !!window.localStorage.getItem("userId")
        }
    }

    componentWillMount() {
        if(!this.state.isAuthenticated){
            const {history} = this.props;
            setTimeout(() => {
                history.replace("/login");
            }, 1000)
        }
    }

    login = () => {
        const {history} = this.props;
        history.replace("/login");
    };

    render() {
        let { component: Component, ...rest} = this.props;
        return  this.state.isAuthenticated ?
            (<Route {...rest} render={(props) => ( <Component {...props} />
            )}/> ) : (<div>
                <p style = {{"width": "100%", "textlign": "center", "fontSize": "20px", "lineHeight": "50px"}}>请登录...</p>
                <input type="button" onClick={this.login} value={"点击去登录页"}/>


            </div>)

    }
}

export default withRouter(PrivateRoute);
