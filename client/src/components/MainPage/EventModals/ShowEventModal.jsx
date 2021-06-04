import { Button } from 'antd'

import React, { useState } from 'react'
import { Modal, Buttonm, Input } from 'antd'

export default function ShowEventModal() {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		setIsModalVisible(false)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
	}

	return (
		<>
			<Button type='primary' onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				title='Что делать'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<div className='authorInfo'>
					<div className='authorInfo__left'>
						<img
							src='https://ca.slack-edge.com/T01R8FD0SSY-U01SUNL50H5-68ddf68520d7-512'
							alt='avatar'
							className='authorInfo__avatar'
						/>
						<span className='authorInfo__name'>Maksim Miskam</span>
						<ul className='rating authorInfo__rating'>
							<li className='rating__star'>*</li>
							<li className='rating__star'>*</li>
						</ul>
					</div>
				</div>
				<div className='authorInfo__right'>
					<h4 className='title-mini'>Теги:</h4>
					<ul className='tags-list'>
						<li className='tags-list__tag'>#js</li>
						<li className='tags-list__tag'>#смузи</li>
						<li className='tags-list__tag'>#чипсы</li>
						<li className='tags-list__tag'>#api-google-maps</li>
					</ul>
				</div>
				<button className='btn goButton'>Иду!</button>
			</Modal>
		</>
	)
}
