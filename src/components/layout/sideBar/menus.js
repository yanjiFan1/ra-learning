import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
export const menus = [{
  id:'1',
	path: '/dashboard',
	name: '首页',
  icon: 'icon-home',
  sub:[]
},
{
  id:'2',
	path: '/auth',
	name: '权限管理',
	icon: 'icon-renshu',
	sub: [{
    id:'2_1',
		path: '/auth/role',
		name: '角色管理',
		icon: '',
	},
	{
    id:'2_2',
		path: '/auth/menu',
		name: '菜单管理',
		icon: '',
	},
	{
    id:'2_3',
		path: '/auth/user',
		name: '用户管理',
		icon: '',
	}]
}]
