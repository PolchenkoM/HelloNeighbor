import { Button } from 'antd'

import React, { useState } from 'react'
import { Modal, Buttonm, Input } from 'antd'

export default function LogBar() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

	return (
		<>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <Input placeholder="Почта" />
      <Input placeholder="Пароль" />
      </Modal>
			<a className='log-link' onClick={showModal}>Войдите</a>
		</>
	)
}
