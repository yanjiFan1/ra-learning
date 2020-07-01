import Login from '../view/login/Login'
import Dashboard from '../view/dashboard/Dashboard'
import Menu from '../view/auth/menu/Menu' // 权限管理-菜单管理
import Role from '../view/auth/role/Role' // 权限管理-角色管理
import User from '../view/auth/user/User' // 权限管理-用户管理
import Home from '../view/home/Home'
import Shop from '../view/shop/Shop'
import SecondRoute from '../view/common/SecondRoute' // 公共模块-二级路由

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
        component: SecondRoute,
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

export default routes;
