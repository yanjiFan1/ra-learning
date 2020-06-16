/*
 * @Description: 页面布局-头部
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header } = Layout
export default class GlobalHeader extends Component {
	render() {
        return (
            <Header className="m-layout-header" style={{ padding: 0 }}>
            	我是头部呢
            </Header>
        )
    }
}