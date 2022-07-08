import { useState } from 'react'
import { useSelector } from 'react-redux'
import { notification, Modal, Tag } from 'antd'

export default function ShowAuthorModal({ setAuthorModal }) {
	const key = 'updatable'

	const [isModalVisible, setIsModalVisible] = useState(true)
	const selectedEvent = useSelector(state => state.events.selectedEvent)

	const [eventAuthor, setEventAuthor] = useState({})

	const author = selectedEvent.author

	const addFriend = () => {
		const me = localStorage.getItem('email')

		fetch('http://localhost:3001/addFriend', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				author,
				me,
			}),
		})
		notification.open({
			key,
			message: 'Секундочку...',
			description: 'Отправляем запрос',
		})
		setTimeout(() => {
			notification.open({
				key,
				message: 'Успешно!',
				description: `Вы подружились c ${eventAuthor.name}`,
			})
		}, 1000)
		setIsModalVisible(false)
		setAuthorModal(false)
	}

	const handleOk = () => {}

	const handleCancel = () => {
		setIsModalVisible(false)
		setAuthorModal(false)
	}

	console.log('from author show==>', eventAuthor)

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
							src={`http://localhost:3001/${eventAuthor.avatar}`}
							alt='avatar'
							className='authorInfo__avatar'
						/>
					</div>
					<div className='authorInfo__right'>
						<div className='authorInfo__mainInfo'>
							<div className='authorInfo__name'>{eventAuthor.name}</div>
							<div className='rating authorInfo__rating'>
								<div className='rating__body'>★★★★★</div>
							</div>
						</div>
						<div>
							{eventAuthor.tags
								? eventAuthor.tags.map((tag, ind) => (
										<Tag key={ind} color='#3b5999'>
											{tag.title}{' '}
										</Tag>
								  ))
								: null}
						</div>
					</div>
				</div>
				<div className='eventInfo'>
					<hr />
					<h3 className='eventInfo__title'>О себе: </h3>
					<p className='eventInfo__description'>{eventAuthor.aboutSelf}</p>
				</div>
				<div className='button-wrapper'>
					<button onClick={addFriend} className='goButton'>
						Добавить в друзья
					</button>
				</div>
			</Modal>
		</>
	)
}
