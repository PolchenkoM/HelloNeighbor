import { useSelector } from "react-redux"
import ChatModal from "../ChatModal/ChatModal"

const EventList = () => {
	const circleEvents = useSelector((state) => state.events.circleEvents)

	return (
		<div className='container--eventList'>
			<ul className='eventList'>
				{circleEvents.length ? circleEvents.map((el) => <li className='eventList__item'> {el.author}</li>) : null}
				<ChatModal />
			</ul>
		</div>
	)
}

export default EventList
