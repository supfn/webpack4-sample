import React, {Component} from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

import './index.less';

const FormItem = Form.Item;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginLoading: false,
    }
  }

  login = (e) => {
    e.preventDefault();
    const { history } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({ loginLoading: true });
        new Promise(resolve => {
          setTimeout(resolve, 1000, true)
        }).then(v => {
          if (v) {
            this.setState({ loginLoading: false });
            window.localStorage.setItem("userId", new Date().getMilliseconds().toString());
            history.replace("/");
          }
        });
      }
    });
  };

  render() {
    const { loginLoading } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <Form onSubmit={this.login} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                     placeholder="Username"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} type="password"
                     placeholder="Password"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loginLoading}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}


export default Form.create()(Login);
