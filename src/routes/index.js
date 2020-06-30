import React, { Component } from 'react';
// import { Switch, Route, Router, Redirect } from 'react-router'
import Login from '../view/login/Login'
import Dashboard from '../view/dashboard/Dashboard'
import Menu from '../view/auth/menu/Menu' // 权限管理-菜单管理
import Role from '../view/auth/role/Role' // 权限管理-角色管理
import User from '../view/auth/user/User' // 权限管理-用户管理
import Home from '../view/home/Home'
import Shop from '../view/shop/Shop'

// const Dashboard = React.createClass({
//   render() {
//     return <div>Welcome to the Dashboard!</div>
//   }
// })

// const About = React.createClass({
//   render() {
//     return <div>Welcome to the About!</div>
//   }
// })

// const Inbox = React.createClass({
//   render() {
//     return <div>Welcome to the Inbox!</div>
//   }
// })

// const Message = React.createClass({
//   render() {
//     return <div>Welcome to the Message!</div>
//   }
// })

// const routeConfig = [
//   { 
//   	path: '/',
//     component: Login,
//     indexRoute: { component: Dashboard },
//     childRoutes: [
//       { path: 'about', component: About },
//       { path: 'inbox',
//         component: Inbox,
//         childRoutes: [
//           { path: '/messages/:id', component: Message },
//           { path: 'messages/:id',
//             onEnter: function (nextState, replaceState) {
//               replaceState(null, '/messages/' + nextState.params.id)
//             }
//           }
//         ]
//       }
//     ]
//   }
// ]

// export default <Router routes={routeConfig} />

import { Route, BrowserRouter, HashRouter, Redirect, Switch } from 'react-router-dom'
import { matchRoutes, renderRoutes } from "./react-router-config/index.js";
const routes = [
  {
    component: Login,
    routes: [
      {
        path: "/",
        exact: true,
        component: Login
      },
      {
        path: "/login",
        exact: true,
        component: Login
      },
      {
        path: "/dashboard",
        exact: true,
        component: Dashboard
      },
      {
        path: "/auth",
        component: Role,
        routes: [
          {
            path: "/auth/menu",
            component: Menu
          },
          {
            path: "/auth/role",
            component: Role
          },
          {
            path: "/auth/user",
            component: User
          }
        ]
        
      },
      {
        path: "/home",
        exact: true,
        component: Home
      },
      {
        path: "/shop",
        exact: true,
        component: Shop
      }
    ]
  }
];

class ARouter extends Component {
  render() {
    return(
      <div>
        {renderRoutes(routes[0].routes)}
      </div>
    )
  }
}

export default ARouter;

// export default () => (
//   <BrowserRouter>
//     {renderRoutes(routes)}
//   </BrowserRouter>
// )
