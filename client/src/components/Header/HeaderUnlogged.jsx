import { useDispatch, useSelector } from 'react-redux'
import { addEventModal } from '../../redux/Actions/eventAC'
import React, { useState } from 'react'
import { Modal, Input, Button } from 'antd'
import useRegForm from '../hooks/useForm'
import { Link } from 'react-router-dom'
import { getCurrentUserGoogleThunk } from '../../redux/Actions/usersAC'

export default function HeaderUnlogged() {
	// logBar
	const dispatch = useDispatch()
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [values, changeHandler] = useRegForm()

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = e => {
		e.preventDefault()
		setIsModalVisible(false)
		fetch('http://localhost:3001/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				values,
			}),
		})
			.then(res => res.json())
			.then(result => {
				localStorage.setItem('email', result.email)
				dispatch(getCurrentUserGoogleThunk(result.email))
			})
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	// header and navbar
	const isUser = useSelector(state => state.users.currentUser)

	const createEvent = () => {
		dispatch(addEventModal())
	}

	return (
		<>
			<header className='header'>
				<nav className='navbar header__navbar'>
					<ul className='list navbar__list'>
						<li className='list__item'>
							<Link to='/'>
								<img
									className='header__image'
									src='/img/logo.jpg'
									alt='SITE LOGO'
								/>
							</Link>
						</li>
						<li className='list__item'>
							<a href='/' target='_blank' className='list__item-link'>
								Продукты
							</a>
						</li>
					</ul>
				</nav>
				<button className='button logButton' onClick={showModal}>
					Войти
				</button>
				<Modal
					title='Войдите в аккаунт'
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
					footer={null}
				>
					<form method='POST' onSubmit={handleOk}>
						<label htmlFor=''>
							Почта
							<Input
								name='email'
								type='email'
								value={values.email || ''}
								onChange={changeHandler}
								placeholder='Введите текст'
							/>
						</label>
						<label htmlFor=''>
							Пароль
							<Input
								name='password'
								type='password'
								value={values.password || ''}
								onChange={changeHandler}
								placeholder='Введите текст'
							/>
						</label>
						<button className='button'>Войти</button>
					</form>
				</Modal>
			</header>
		</>
	)
}
