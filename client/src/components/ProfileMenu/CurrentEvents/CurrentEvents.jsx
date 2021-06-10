import UserMenuSider from '../../MainPage/UserMenuSider/UserMenuSider'
import Event from '../History/Event'

export default function CurrentEvents() {
	const currentEvents = [
		{ title: 'курнуть', description: 'описание1', regDate: 'random data' },
		{ title: 'погулять', description: 'описание2', regDate: 'random data' },
	]

	return (
		<>
				<div className='container--currentEvents'>
					<ul className='currentEvents'>
						{currentEvents.map(event => (
							<Event name={event.title} eventTime={event.description} />
						))}
					</ul>
				</div>
		</>
	)
}
