/*
 * @Description: 页面布局-头部
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
const { Header } = Layout
export default class GlobalHeader extends Component {
	render() {
		const { collapsed, onSwitchCollapsed } = this.props
    return (
      <Header className="site-layout-background" style={{ padding: 0 }}>
	      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
	        className: 'trigger',
	        onClick: onSwitchCollapsed,
	      })}
	    </Header>
    )
  }
}