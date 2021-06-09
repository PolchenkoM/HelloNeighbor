import "antd/dist/antd.css"
import { FacebookOutlined, InstagramOutlined, ProfileOutlined, TeamOutlined, HistoryOutlined, LogoutOutlined } from "@ant-design/icons"
import { Typography, Button, Menu } from "antd"

import Avatar from "antd/lib/avatar/avatar"
import Rater from "./Rater/Rater"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../../redux/Actions/usersAC"
import { Link } from "react-router-dom"

const UserMenuSider = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector((state) => state.users.currentUser)

	const id = localStorage?.id

	const { Title } = Typography
	const size = "large"

	const hideSidebar = (e) => {
		const elem = e.target.parentElement.parentElement
		elem.classList.toggle("sidebar-hidden")
		const labelSpans = document.querySelectorAll(".ant-menu-title-content")
		labelSpans.forEach((el) => el.classList.toggle("hidden"))
	}

	const signOut = async () => {
		const GoogleAuth = await window.gapi?.auth2?.getAuthInstance().then(
			() => {
				localStorage.clear()
				dispatch(logoutUser())
			},
			() => console.log("signout Error")
		)
	}

	return (
		<div className='sidebar'>
			<div className='sidebar_null'></div>
			<div className='sidebar__top'>
				<div span={24} className='avatar'>
					<Avatar size={180} src={`http://localhost:3001/${currentUser.avatar}`} draggable={false} />
				</div>
				<h3 level={4}>{currentUser.name}</h3>
				<div className='rater'>
					<Rater />
				</div>
				<div className='socialsButtons'>
					<Button type='dashed' icon={<FacebookOutlined />} size={size} />
					<Button type='dashed' className='buttons' icon={<InstagramOutlined />} size={size} />
				</div>
				<Menu className='profileMenu'>
					<Menu.Item key='1' className='userLinksButton' icon={<ProfileOutlined className='profileIcon' />} title='Profile'>
						<Link to={"/profile"}>Profile</Link>
					</Menu.Item>
					<Menu.Item key='2' className='userLinksButton' icon={<TeamOutlined />} title='Friends'>
						<Link to={"/friends"}>Friends</Link>
					</Menu.Item>
					<Menu.Item key='3' className='userLinksButton' icon={<HistoryOutlined />} title='History'>
						<Link to={"/history"}>History</Link>
					</Menu.Item>
					<Menu.Item key='4' onClick={signOut} className='userLinksButton' icon={<LogoutOutlined />} title='Logout'>
						Logout
					</Menu.Item>
				</Menu>
			</div>
			<div className='sidebar__bottom'>
				<button className='button sidebar__bottom-button' onClick={hideSidebar}>
					asd
				</button>
			</div>
		</div>
	)
}

export default UserMenuSider
