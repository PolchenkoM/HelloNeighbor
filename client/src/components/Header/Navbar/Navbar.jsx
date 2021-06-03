import { Layout, Menu, Breadcrumb } from 'antd'
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
} from '@ant-design/icons'

const { SubMenu } = Menu
const { Content, Sider } = Layout

export default function Navbar() {
	return (
  <>
    <nav className="navbar header__navbar">
      <ul className="list">
        <li className="list__item"><a href="">Продукты</a></li>
        <li className="list__item"><a href="">О нас</a></li>
        <li className="list__item"><a href="">Поддержка</a></li>
      </ul>
    </nav>
  </>

	)
}
