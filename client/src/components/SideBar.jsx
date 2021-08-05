import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link , useHistory} from 'react-router-dom'
import "antd/dist/antd.css"
import Avatar from 'antd/lib/avatar/avatar'
import {
	ProfileOutlined,
	TeamOutlined,
	InboxOutlined,
	LogoutOutlined,
	MenuFoldOutlined,
} from '@ant-design/icons'
import Rater from "./Rater"
import { logoutUser } from '../redux/Actions/usersAC'

export default function SideBar() {
	useEffect(() => {
		window.gapi?.load("auth2", function () {
			window.gapi?.auth2
				.init({
					client_id: "213632962035-g4knv9je1q010p9lclqpuq2u73au46l3.apps.googleusercontent.com"
				})
				.then(
					() => console.log("init OK"),
					() => console.log("init error")
				)
		})
	}, [])
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.users.currentUser)
	const history = useHistory()

	const hideSidebar = e => {
		const elem = document.querySelector('.sidebar')
		const container = document.querySelector('.container--sidebar')
		elem.classList.toggle('sidebar--active')
		container.classList.toggle('container--sidebar--active')
	}

	const signOut = () => {
		const GoogleAuth = window.gapi?.auth2?.getAuthInstance().then(
			() => {
				localStorage.clear()
				dispatch(logoutUser())
				history.push("/")
				GoogleAuth?.signOut()
			},
			() => console.log("signout Error")
		)
	}
	return (
		<div className='container--sidebar container--sidebar--active'>
			<div className='sidebar sidebar--active'>
				<div className='sidebar__top'>
					<div span={24} className='sidebar__avatar-wrapper'>
						<Avatar
							className='sidebar__avatar'
							src={`http://localhost:3001/${currentUser.avatar}`}
							draggable={false}
						/>
					</div>
					<h4 className='sidebar__username'>{currentUser.name}</h4>
					<div className='rater'>
						<Rater />
					</div>
					<div className='social'>
						<a className='button social__link' href='/' target='_blank'>
							<img src='/img/social-icons/instagramm.svg' alt='иконка инстаграмм' className='social__icon' />
						</a>
						<a className='button social__link' href='/' target='_blank'>
							<img src='/img/social-icons/vkontakte.svg' alt='иконка вконтакте' className='social__icon' />
						</a>
						<a className='button social__link' href='/' target='_blank'>
							<img src='/img/social-icons/twitter.svg' alt='иконка твиттер' className='social__icon' />
						</a>
						<a className='button social__link' href='/' target='_blank'>
							<img src='/img/social-icons/facebook.svg' alt='иконка фейсбук' className='social__icon' />
						</a>
					</div>
					<ul className='profileMenu'>
						<li key='1' className='profileMenu__item'>
							<Link className='profileMenu__item-link' to={'/friends'}>
								<TeamOutlined className='profileMenu__item-icon' />
								<span className='profileMenu__item-text'>Друзья</span>
							</Link>
							<span className='tooltip'>Друзья</span>
						</li>
						<li key='2' className='profileMenu__item'>
							<Link className='profileMenu__item-link' to={'/history'}>
								<InboxOutlined className='profileMenu__item-icon' />
								<span className='profileMenu__item-text'>История</span>
							</Link>
							<span className='tooltip'>История</span>
						</li>
						<li key='3' className='profileMenu__item'>
							<Link className='profileMenu__item-link' to={'/profile'}>
								<ProfileOutlined className='profileMenu__item-icon' />
								<span className='profileMenu__item-text'>Профиль</span>
							</Link>
							<span className='tooltip'>Профиль</span>
						</li>
						<li key='4' onClick={signOut} className='profileMenu__item'>
							<Link className='profileMenu__item-link'>
								<LogoutOutlined className='profileMenu__item-icon profileMenu__item-icon--logout' />
								<span className='profileMenu__item-text'>Выйти</span>
							</Link>
							<span className='tooltip'>Выйти</span>
						</li>
					</ul>
				</div>
				<button className='button sidebar__closeButton' onClick={hideSidebar}>
					<MenuFoldOutlined className='sidebar__closeButton-icon' />
					<span className='sidebar__closeButton-text'></span>
				</button>
			</div>
		</div>
	)
}
