/*
 * @Description: 页面布局-侧边栏
 * @Author: yanji
 * @Date: 2020/6/16
*/
import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { sliderMenu } from '../../../routes/index'
import SiderMenu from './components/SiderMenu';
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
    this.menus = sliderMenu
  }

  state = {
    mode: 'inline',
    openKey: '',
    selectedKey: '',
    firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
  }

  componentDidMount() {
    this.setMenuOpen(this.props);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  // 	const { collapsed } = nextProps;
  //   // 当传入的collapsed发生变化的时候，更新state
  //   if (collapsed !== prevState.collapsed) {
  //     return {
  //       collapsed
  //     }
  //   }
  //   // 否则，对于state不进行任何操作
  //   return null;
  // 	// this.onCollapse(props.collapsed);
  //   // this.setMenuOpen(props)
  // }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.onCollapse(nextProps.collapsed);
    this.setMenuOpen(nextProps)
  }

  setMenuOpen = props => {
    const { pathname } = props.location;
    this.setState({
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname
    });
  }
  
  onCollapse = (collapsed) => {
    this.setState({
      collapsed,
      firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }

  menuClick = e => {
    console.log(e)
    this.setState({
      selectedKey: e.key
    })
  }

  openMenu = v => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    })
  }

	render() {
		const { collapsed } = this.props
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
        <SiderMenu
          menus={ this.menus }
          onClick={this.menuClick}
          theme="dark"
          mode="inline"
          selectedKeys={[this.state.selectedKey]}
          openKeys={this.state.firstHide ? null : [this.state.openKey]}
          onOpenChange={this.openMenu}
        />
      </Sider>
    )
    }
}
export default withRouter(GlobalSideBar);
