/*
 * @Description: 页面布局-内容
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout
import Routes from '../../../routes/index'

export default class GlobalContent extends Component {
	render() {
    return (
      <Content
        className="site-layout-background"
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
        }}
      >
       	<div className="site-layout-background">
          <Routes />
        </div>
      </Content>
    )
  }
}