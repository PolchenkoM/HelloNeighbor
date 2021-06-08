import { useDispatch, useSelector } from 'react-redux'
import CreateEventModal from '../../MainPage/EventModals/CreateEventModal'
import UserMenuSider from '../../MainPage/UserMenuSider/UserMenuSider'
import Event from './Event'

export default function History() {
	const historyEvents = [
		{ title: 'курнуть', description: 'description', regDate: 'random data' },
		{ title: 'погулять', description: 'погулять', datregDatee: 'random data' },
	]
	const history = useSelector(state => state.users.currentUser.history) ?? [
		'Список пуст',
	]

	console.log('history-----------', history)

	return (
		<>
			<div className='containerMain'>
				<UserMenuSider />
				<div className='container'>
					<ul className='history'>
						{history.map(event => (
							<Event
								name={event.name}
								eventTime={event.eventTime}
								eventInfo={{
									title: event.title,
									description: event.description,
									members: event.members,
									comments: event.comments,
									tags: event.tags,
									regDate: event.regDate,
									eventTime: event.eventTime,
									eventStatus: event.eventStatus,
									coordinates: event.coordinates,
								}}
							/>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
