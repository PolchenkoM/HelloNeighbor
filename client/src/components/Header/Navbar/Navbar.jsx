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
      <ul className="list navbar__list">
        <li className="list__item"><a href="" className="list__item-link">Продукты</a></li>
        <li className="list__item"><a href="" className="list__item-link">О&nbsp;нас</a></li>
        <li className="list__item"><a href="" className="list__item-link">Поддержка</a></li>
      </ul>
    </nav>
  </>

	)
}
