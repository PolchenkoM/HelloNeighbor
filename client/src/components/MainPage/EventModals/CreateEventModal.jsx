import React, { useState } from 'react'
import { Modal, Button, Input, Form, Radio } from 'antd'
import { useDispatch, useSelector } from "react-redux";
import { changeVisibility } from '../../../redux/Actions/eventAC';
export default function CreateEventModal() {
	// const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()

  const modalVisibility = useSelector(state => state.events.modalVisibility)

	const showModal = () => {
    console.log(123);
		dispatch(changeVisibility())
	}

	const handleOk = () => {
		dispatch(changeVisibility())
	}

	const handleCancel = () => {
		dispatch(changeVisibility())
	}

	const [form] = Form.useForm()

	return (
		<>
			<Modal
				title='Создание ивента'
				visible={modalVisibility}
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
