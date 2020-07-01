/*
 * @Description: 全局页面布局
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import GlobalHeader from './header/Header'
import GlobalFooter from './footer/Footer'
import GlobalContent from './content/Content'
import GlobalSideBar from './sideBar/SideBar'
import './layout.less'

class GlobalLayout extends Component {
	constructor(props){
    super(props)
  }
  
	state = {
		collapsed: 0
	}

	// 切换侧边栏展开或者合并
	onSwitchCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

	render() {
		const { collapsed } = this.state
    return (
      <Layout className="g-layout">
		    <GlobalSideBar collapsed={collapsed} />
				<Layout className="site-layout">
		      <GlobalHeader collapsed={collapsed} onSwitchCollapsed={this.onSwitchCollapsed} />
		      <GlobalContent />
		      <GlobalFooter />
		    </Layout>
			</Layout>
    )
  }
}
export default withRouter(GlobalLayout)
