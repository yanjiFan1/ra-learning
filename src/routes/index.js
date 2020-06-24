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

import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import { matchRoutes, renderRoutes } from "react-router-config";
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
        path: "/dashboard/:id",
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
export default () => (
  <BrowserRouter>
    {/* kick it all off with the root route */}
    {renderRoutes(routes)}
    {
      /*
      <Switch>
        <Redirect exact from='/' to='/login' />
        <Route path='/' exact component={Login}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/dashboard/:id' exact component={Dashboard}></Route>
        <Route render={() => <div>Not Found</div>} />
      </Switch>
      */
    }
  </BrowserRouter>
)
