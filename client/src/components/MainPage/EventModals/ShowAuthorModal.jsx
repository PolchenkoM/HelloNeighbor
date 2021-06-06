import { Button } from 'antd'

import React, { useState } from 'react'
import { Modal, Buttonm, Input } from 'antd'

export default function ShowAuthorModal({setAuthorModal}) {
	const [isModalVisible, setIsModalVisible] = useState(true)

	const showModal = () => {
		setIsModalVisible(true)
	}

	const handleOk = () => {
		setIsModalVisible(false)
	}

	const handleCancel = () => {
		setIsModalVisible(false)
    setAuthorModal(false)
	}

	return (
		<>
			<Modal
				footer={null}
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
					</div>
					<div className='authorInfo__right'>
						<div className='authorInfo__mainInfo'>
							<span className='authorInfo__name'>Maksim Miskam, 12</span>
							<div className='rating authorInfo__rating'>
								<div className='rating__value'>3.6</div>
								<div className='rating__body'>★★★★★</div>
							</div>
						</div>
						<ul className='tags-list'>
							<li className='tags-list__tag'>#js</li>
							<li className='tags-list__tag'>#смузи</li>
							<li className='tags-list__tag'>#чипсы</li>
							<li className='tags-list__tag'>#api-google-maps</li>
              <li className='tags-list__tag'>#смузи</li>
							<li className='tags-list__tag'>#чипсы</li>
              <li className='tags-list__tag'>#смузи</li>
							<li className='tags-list__tag'>#чипсы</li>
              <li className='tags-list__tag'>#смузи</li>
							<li className='tags-list__tag'>#чипсы</li>
              <li className='tags-list__tag'>#смузи</li>
							<li className='tags-list__tag'>#чипсы</li>
						</ul>
					</div>
				</div>
				<div className='eventInfo'>
					<hr />
					<h3 className='eventInfo__title'>О себе: </h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
						sit autem sint. Dicta alias natus culpa consequatur quis itaque
						explicabo nobis molestiae esse veritatis. Modi voluptates ut aliquid
						porro ipsam!
					</p>
				</div>
				<div className='button-wrapper'>
					<button className='goButton'>Go!</button>
				</div>
			</Modal>
		</>
	)
}
