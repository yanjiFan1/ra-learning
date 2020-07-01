import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const iconStyle={
  marginRight:'10px',
  fontSize:'12px'
}

const renderMenuItem =
  ({ name, frontIcon, path })=> {
    return (
      <Menu.Item
        key={path}
      >
        <Link to={path}>
          { frontIcon && <i className={`icon iconfont ${frontIcon}` } style={iconStyle} />}
          <span className="nav-text f-usn">{name}</span>
        </Link>
      </Menu.Item>
    )
  }

const renderSubMenu =
  ({ name, frontIcon, path, routes }) =>{
    return (
      <Menu.SubMenu
        key={path}
        title={
          <span>
            {frontIcon && <i className={`icon iconfont ${frontIcon}` } style={iconStyle} />}
            <span className="nav-text f-usn">{name}</span>
          </span>
        }
      >
      {routes && routes
          .map(item => renderMenuItem(item))}
      </Menu.SubMenu>
    )
  }
        
        
export default ({ menus, ...props }) => {
    return (
        <Menu {...props}>
          {menus && menus
          .filter(item=>item.fronType!= 'module')
          .map(item => item.routes && item.routes.length? renderSubMenu(item) : renderMenuItem(item))}
        </Menu>
    )
}