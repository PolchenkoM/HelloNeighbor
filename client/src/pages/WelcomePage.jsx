import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Modal, Input } from 'antd'
import { getCurrentUserGoogleThunk } from '../redux/Actions/usersAC'
import useForm from '../hooks/useForm'
import RegistrationGoogle from '../components/RegistrationGoogle'

export default function WelcomePage() {
	const dispatch = useDispatch()

	const [values, changeHandler] = useForm()
	const [visible, setVisible] = useState(false)

	const showModal = () => {
		setVisible(true)
	}

	const handleOk = () => {
		fetch('http://localhost:3001/registration/', {
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
		setVisible(false)
	}

	return (
		<>
			<div className='welcome container--welcome'>
				<div className='welcome__body'>
					<button className='welcome__button' onClick={showModal}>
						Создать аккаунт
					</button>
					<Modal
						title='Создать аккаунт'
						visible={visible}
						onOk={handleOk}
						className='authModal'
						onCancel={handleCancel}
            cancelText='Отмена'
            okText='Oк'
					>
						<Input
							name='email'
							type='email'
							className='auth-input'
							value={values.email || ''}
							onChange={changeHandler}
							placeholder='Почта'
						/>
						<Input
							name='password'
							type='password'
							className='auth-input'
							value={values.password || ''}
							onChange={changeHandler}
							placeholder='Пароль'
						/>
						<RegistrationGoogle />
					</Modal>
					<h1 className='welcome__title'>Найди соседа</h1>
				</div>
			</div>
		</>
	)
}
