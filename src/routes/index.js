import React, { Component } from 'react';
// import { Switch, Route, Router, Redirect } from 'react-router'
import Login from '../view/login/Login'
import Dashboard from '../view/dashboard/Dashboard'
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
        path: "/home",
        exact: true,
        component: Home
      },
      {
        path: "/shop",
        exact: true,
        component: Shop
      },
      {
        /*
        path: "/child/:id",
        component: Child,
        routes: [
          {
            path: "/child/:id/grand-child",
            component: GrandChild
          }
        ]
        */
      }
    ]
  }
];

class ARouter extends Component {
  render() {
    return(<HashRouter>{renderRoutes(routes[0].routes)}</HashRouter>)
  }
}

export default ARouter;

// export default () => (
//   <BrowserRouter>
//     {renderRoutes(routes)}
//   </BrowserRouter>
// )
