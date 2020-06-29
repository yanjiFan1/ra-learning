/*
 * @Description: 页面布局-侧边栏
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Link, NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import './sideBar.less'
const { Sider } = Layout;
class GlobalSideBar extends Component {
	constructor(props){
    super(props);
  }
	render() {
		const { collapsed } = this.props
		const MenuList = [{
			key: '1',
			icon: <UserOutlined />,
			title: '1',
			path: '/dashboard'
		},{
			key: '2',
			icon: <VideoCameraOutlined />,
			title: '2',
			path: '/login'
		},{
			key: '3',
			icon: <UploadOutlined />,
			title: '3',
			path: '/home'
		},{
			key: '4',
			icon: <UploadOutlined />,
			title: '4',
			path: '/shop'
		},{
			key: '5',
			icon: <UploadOutlined />,
			title: '5',
			path: '/child/1/grand-child'
		}]
    return (
      <Sider 
		    style={{
	        overflow: 'auto',
	        height: '100vh',
	      }} 
	      trigger={null} 
	      collapsible 
	      collapsed={collapsed}
	     >
        <div className="logo">烟祭</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        	{
        		MenuList.map(item => 
        			<Menu.Item key={item.key} icon={item.icon}>
        				<HashRouter>
        					{/*<Link to={item.path}>{item.title}</Link>*/}
        					<NavLink className="menu-link" activeStyle={{color: 'red', background: 'blue'}} to={item.path}>{item.title}</NavLink>
        				</HashRouter>
	            </Menu.Item>
        		)
        	}
        </Menu>
      </Sider>
    )
    }
}
export default withRouter(GlobalSideBar);
