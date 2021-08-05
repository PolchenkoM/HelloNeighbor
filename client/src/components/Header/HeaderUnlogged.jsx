import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Input } from 'antd'
import useForm from '../../hooks/useForm'
import { getCurrentUserGoogleThunk } from '../../redux/Actions/usersAC'

export default function HeaderUnlogged() {
	// logBar
	const dispatch = useDispatch()
	const [isModalVisible, setIsModalVisible] = useState(false)
	const [values, changeHandler] = useForm()

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
				...values,
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

	return (
		<>
			<header className='header'>
				<nav className='navbar'>
					<ul className='list'>
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
					className='authModal'
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
					cancelText='Отмена'
					okText='Oк'
				>
					<form method='POST' onSubmit={handleOk}>
						<label htmlFor=''>
							Почта
							<Input
								className='auth-input'
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
								className='auth-input'
								name='password'
								type='password'
								value={values.password || ''}
								onChange={changeHandler}
								placeholder='Введите текст'
							/>
						</label>
					</form>
				</Modal>
			</header>
		</>
	)
}
