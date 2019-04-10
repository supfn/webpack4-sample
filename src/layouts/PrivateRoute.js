import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {notification} from 'antd';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: !!window.localStorage.getItem("userId")
    }
  }

  componentWillMount() {
    console.log("[PrivateRoute componentWillMount]");
    if (!this.state.isAuthenticated) {
      notification.warning({
        message: '未登录',
        description: '即将自动跳转登录...',
        duration: 2.3
      });
      setTimeout(() => {
        this.gotoLogin();
      }, 2500)
    }
  }

  componentDidMount() {
    console.log("[PrivateRoute componentDidMount]");
  }

  gotoLogin = () => {
    const { history } = this.props;
    history.replace("/login");
  };

  render() {
    let { component: Component, ...rest } = this.props;
    let { isAuthenticated } = this.state;
    return isAuthenticated ? <Route {...rest} render={props => <Component {...props} />}/> : <div>.</div>
  }
}

export default withRouter(PrivateRoute);
