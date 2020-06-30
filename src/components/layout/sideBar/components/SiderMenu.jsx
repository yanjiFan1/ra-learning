import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const iconStyle={
  marginRight:'10px',
  fontSize:'12px'
}

const renderMenuItem =
  ({ id, name, frontIcon, fronType, path, ...props })=> {
    return (
      <Menu.Item
        key={path}
        {...props}
      >
        <Link to={path}>
          { frontIcon && <i className={`icon iconfont ${frontIcon}` } style={iconStyle} />}
          <span className="nav-text f-usn">{name}</span>
        </Link>
      </Menu.Item>
    )
  }

const renderSubMenu =
  ({ id, name, frontIcon, fronType, path, sub, ...props }) =>{
    return (
      <Menu.SubMenu
        key={path}
        title={
          <span>
            {frontIcon && <i className={`icon iconfont ${frontIcon}` } style={iconStyle} />}
            <span className="nav-text f-usn">{name}</span>
          </span>
        }
        {...props}
      >
      {sub && sub
          .map(item => renderMenuItem(item))}
      </Menu.SubMenu>
    )
  }
        
        
export default ({ menus, ...props }) => {
    return (
        <Menu {...props}>
          {menus && menus
          .filter(item=>item.fronType!= 'module')
          .map(item => item.sub && item.sub.length? renderSubMenu(item) : renderMenuItem(item))}
        </Menu>
    )
}