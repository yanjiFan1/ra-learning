/*
 * @Description: 页面布局-内容
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { Route, BrowserRouter, HashRouter, Redirect, Switch } from 'react-router-dom'
import { matchRoutes, renderRoutes } from "../../../routes/react-router-config/index.js";
import { routes } from '../../../routes/index'
import { Layout } from 'antd';
const { Content } = Layout


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
          {renderRoutes(routes)}
        </div>
      </Content>
    )
  }
}