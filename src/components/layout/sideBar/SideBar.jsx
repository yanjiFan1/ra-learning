/*
 * @Description: 页面布局-侧边栏
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;

export default class GlobalSideBar extends Component {
	render() {
		const { collapsed } = this.props
		const MenuList = [{
			key: '1',
			icon: <UserOutlined />,
			title: '1'
		},{
			key: '2',
			icon: <VideoCameraOutlined />,
			title: '2'
		},{
			key: '3',
			icon: <UploadOutlined />,
			title: '3'
		},{
			key: '4',
			icon: <UploadOutlined />,
			title: '4'
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
	              {item.title}
	            </Menu.Item>
	          )
        	}
        </Menu>
      </Sider>
    )
    }
}