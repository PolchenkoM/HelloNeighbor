import LogBar from './LogBar/LogBar'
import Navbar from './Navbar/Navbar'
import style from './Header.sass'

import { Layout, Menu, Breadcrumb } from 'antd'
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
} from '@ant-design/icons'
import logo from './randomLogo.jpg'
const { SubMenu } = Menu
const { Content, Sider } = Layout

export default function Header() {
	return (
		<>
			<header className="header">
				<img height='50px' src={logo} alt='SITE LOGO' />
				<Navbar />
				<LogBar />
			</header>
		</>
	)
}
