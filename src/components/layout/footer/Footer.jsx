/*
 * @Description: 页面布局-底部
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout
export default class GlobalFooter extends Component {
	render() {
    return (
		  <Footer style={{ textAlign: 'center' }}>Ant Design © 1997-{new Date().getFullYear()} Created by YanJi</Footer>
    )
  }
}