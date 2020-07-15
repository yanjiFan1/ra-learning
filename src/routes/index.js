import Login from '../view/login/Login'
import Dashboard from '../view/dashboard/Dashboard'
import Menu from '../view/auth/menu/Menu' // 权限管理-菜单管理
import Role from '../view/auth/role/Role' // 权限管理-角色管理
import User from '../view/auth/user/User' // 权限管理-用户管理
import Home from '../view/home/Home'
import Shop from '../view/shop/Shop'
import SecondRoute from '../view/common/SecondRoute' // 公共模块-二级路由

// 公共模块（菜单栏）
const common = [
  {
    path: "/admin/dashboard",
    name: '首页',
    exact: true,
    component: Dashboard
  },
  {
    path: "/admin/auth",
    name: '权限管理',
    component: SecondRoute,
    routes: [
      {
        path: "/admin/auth/role",
        name: '角色管理',
        exact: true,
        component: Role
      },
      {
        path: "/admin/auth/menu",
        name: '菜单管理',
        exact: true,
        component: Menu
      },
      {
        path: "/admin/auth/user",
        name: '用户管理',
        exact: true,
        component: User
      }
    ] 
  },
  {
    path: "/admin/home",
    name: '首页',
    exact: true,
    component: Home
  },
  {
    path: "/admin/shop",
    name: '商铺',
    exact: true,
    component: Shop
  }
]



// 页面路由
export const routes = [
  {
    component: SecondRoute,
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
    }].concat(common)
  }  
];

// 页面侧边栏菜单
export const sliderMenu = common