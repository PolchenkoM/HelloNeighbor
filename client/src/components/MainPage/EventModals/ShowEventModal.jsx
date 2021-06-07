import React, { useState } from 'react'
import { Modal, Button, Input } from 'antd'
import ShowAuthorModal from './ShowAuthorModal'

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

  const [authorModal, setAuthorModal] = useState(false)

  function authorShow() {
    return authorModal ? setAuthorModal(false) : setAuthorModal(true)
  }
  console.log(authorModal)

	return (
		<>
			<Button type='primary' onClick={showModal}>
				Open Modal
			</Button>
			<Modal
				footer={null}
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
        {authorModal ? <ShowAuthorModal setAuthorModal={setAuthorModal}/>: ''}
				<div className='authorInfo'>
					<div className='authorInfo__left'>
						<img
							src='https://ca.slack-edge.com/T01R8FD0SSY-U01SUNL50H5-68ddf68520d7-512'
							alt='avatar'
							className='authorInfo__avatar'
              onClick={authorShow}
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
						</ul>
					</div>
				</div>
				<div className='button-more'>
					<svg
						className='svg-icon'
						width='24px'
						height='24px'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M6 9L12 15L18 9'
							stroke='currentColor'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
				<div className='eventInfo'>
					<hr />
					<h3 className='eventInfo__title'>Покурить</h3>
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
