import style from './Body.sass'
import React from 'react'
import { Modal, Buttonm, Input } from 'antd'

export default function Body() {
	function openModalSignUp() {
		console.log('test')
	}
	const [visible, setVisible] = React.useState(false)
	const [confirmLoading, setConfirmLoading] = React.useState(false)
	const [modalText, setModalText] = React.useState('Content of the modal')

	const showModal = () => {
		setVisible(true)
	}

	const handleOk = () => {
		setModalText('The modal will be closed after two seconds')
		setConfirmLoading(true)
		setTimeout(() => {
			setVisible(false)
			setConfirmLoading(false)
		}, 2000)
	}

	const handleCancel = () => {
		console.log('Clicked cancel button')
		setVisible(false)
	}

	return (
		<>
			<main className='body'>
				<div className='welcome body__welcome'>
					<button className='welcome__button' onClick={showModal}>
						Создать аккаунт
					</button>
					<Modal
						title='Title'
						visible={visible}
						onOk={handleOk}
						confirmLoading={confirmLoading}
						onCancel={handleCancel}
					>
						<Input placeholder='Имя' />
						<Input placeholder='Почта' />
						<Input placeholder='Пароль' />
						<p>{modalText}</p>
					</Modal>
					<h1 className='welcome__title'>Найди соседа</h1>
				</div>
			</main>
		</>
	)
}
