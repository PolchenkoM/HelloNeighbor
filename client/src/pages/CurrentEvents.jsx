import Event from "../components/Event"

export default function CurrentEvents() {
	const currentEvents = [
		{ title: 'тайтл', description: 'описание', regDate: 'дата' },
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
