import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';
import './LSider.less';
const {Sider} = Layout;
const SubMenu = Menu.SubMenu;

export default class LSider extends Component {

    render() {
        return (
            <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0}} className="__L-sider">
                <div className="logo"/>
                <Menu theme="dark"  mode="inline"
                      defaultSelectedKeys={[window.location.hash.split('#')[1].split('?')[0]]}
                      defaultOpenKeys={[`/${window.location.hash.split('#')[1].split('?')[0].split('/')[1]}`]}
                >
                    <Menu.Item key="/">
                        <Link to="/">
                            <Icon type="pie-chart"/>
                            <span>Home</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key="/user"
                        title={<span><Icon type="user"/><span>User</span></span>}
                    >
                        <Menu.Item key="/user/list"><Link to="/user/list">user list</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="/team"
                        title={<span><Icon type="team"/><span>Team</span></span>}
                    >
                        <Menu.Item key="/team/one"><Link to="/team/one">Team one</Link></Menu.Item>
                        <Menu.Item key="/team/two"><Link to="/team/two">Team two</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/list">
                        <Link to="/list">
                            <Icon type="file"/>
                            <span>List</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/greeter">
                        <Link to="/greeter">
                            <Icon type="pie-chart"/>
                            <span>Greeter</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/not">
                        <Link to="/not">
                            <Icon type="file"/>
                            <span>Not Found</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
