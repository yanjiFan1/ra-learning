/*
 * @Description: 全局页面布局
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

// import GlobalHeader from './header/Header'
// import GlobalFooter from './footer/Footer'
// import GlobalSideBar from './sideBar/SideBar'
import Routes from '../../routes/index'
import './layout.less'
const { Header, Content, Footer, Sider } = Layout;
export default class GlobalLayout extends Component {
	render() {
        return (
            <Layout className="m-layout">
              {/*
		<Layout className="m-layout">
            <GlobalHeader />
            <GlobalSideBar />
            <Routes />
            <GlobalFooter />
       </Layout>
    */}
       
			    <Sider
			      breakpoint="lg"
			      collapsedWidth="0"
			      onBreakpoint={broken => {
			        console.log(broken);
			      }}
			      onCollapse={(collapsed, type) => {
			        console.log(collapsed, type);
			      }}
			    >
			      <div className="logo" />
			      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
			        <Menu.Item key="1" icon={<UserOutlined />}>
			          nav 1
			        </Menu.Item>
			        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
			          nav 2
			        </Menu.Item>
			        <Menu.Item key="3" icon={<UploadOutlined />}>
			          nav 3
			        </Menu.Item>
			        <Menu.Item key="4" icon={<UserOutlined />}>
			          nav 4
			        </Menu.Item>
			      </Menu>
			    </Sider>
			    <Layout>
			      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
			      <Content style={{ margin: '24px 16px 0' }}>
			        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
			          <Routes />
			        </div>
			      </Content>
			      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			    </Layout>
			</Layout>
        )
    }
}