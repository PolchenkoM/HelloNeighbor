import { useDispatch, useSelector } from 'react-redux'
import { addEventModal } from '../../redux/Actions/eventAC'
import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu
const { Content, Sider } = Layout

export default function HeaderLogged() {
	// logBar

	// header and navbar
	const isUser = useSelector(state => state.users.currentUser)

	const dispatch = useDispatch()

	const createEvent = () => {
		console.log(123)
		dispatch(addEventModal())
	}

	return (
		<>
			<header className='header'>
				<nav className='navbar header__navbar'>
					<ul className='list navbar__list'>
						<li className='list__item'>
							<img
								className='header__image'
								src='/img/randomLogo.jpg'
								alt='SITE LOGO'
							/>
						</li>
						<li className='list__item'>
							<Link to='/products' className='list__item-link'>
								(мейн-хедер)Поддержка
							</Link>
						</li>
						<li className='list__item'>
							<Link to='/about' className='list__item-link'>
								О&nbsp;нас
							</Link>
						</li>
						<li className='list__item'>
							<Link to='/support' className='list__item-link'>
								Поддержка
							</Link>
						</li>
						<li className='list__item'>
							<button onClick={createEvent}>Создать ивент</button>
						</li>
					</ul>
				</nav>
				<button className='button'>Какая-то кнопка</button>
			</header>
		</>
	)
}
