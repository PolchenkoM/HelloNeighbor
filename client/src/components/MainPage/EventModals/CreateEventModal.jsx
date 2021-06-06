import React, { useState } from 'react'
import { Modal, Button, Input, Form, Radio } from 'antd'
type LayoutType = Parameters<typeof Form>[0]['layout'];
export default function CreateEventModal() {
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

	const [form] = Form.useForm()

	return (
		<>
			<Button type='primary' onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				title='Создание ивента'
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<form action="">
          <label htmlFor="">
          Что будем делать?<Input placeholder="Введите текст"/>
          </label>
          <label htmlFor="">
          Описание<Input placeholder="Введите текст"/>
          </label>
          <button className="button">Создать ивент</button>
        </form>
			</Modal>
		</>
	)
}
