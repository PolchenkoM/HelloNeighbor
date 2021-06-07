import { useDispatch, useSelector } from 'react-redux'
import { addEventModal } from '../../redux/Actions/eventAC'
import React, { useState } from 'react'
import { Modal, Input, Button } from 'antd'
import useRegForm from '../hooks/useForm'
import { Link } from 'react-router-dom'


export default function HeaderUnlogged() {
	// logBar
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
			})
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	// header and navbar
	const dispatch = useDispatch()
	const isUser = useSelector(state => state.users.currentUser)
  console.log(isUser, 'from unlogged')
	const createEvent = () => {
		dispatch(addEventModal())
	}

	return (
		<>
			<header className='header'>
				<img height='50px' src='/img/randomLogo.jpg' alt='SITE LOGO' />
				<nav className='navbar header__navbar'>
					<ul className='list navbar__list'>
						<li className='list__item'>
            <Link to='/products' className='list__item-link'>
            (нот-мейн-хедер)Продукты
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
					</ul>
				</nav>
				<button className='button' onClick={showModal}>
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
