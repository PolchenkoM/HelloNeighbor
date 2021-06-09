import React from "react"
import { useSelector } from "react-redux"
import { Button } from "antd"

const EventList = () => {
	const events = useSelector((state) => state.events.circleEvents)
	const allEvents = useSelector((state) => state.events.allEvents)

	return (
		<div className='container--eventList'>
			<p className='eventList__item'>EVENT LIST </p>
			<ul>
				{events.length &&
					events.map((el, ind) => (
						<>
							{el.title && (
								<li>
									<Button>{el.title}</Button> <br />
									<br />
								</li>
							)}
						</>
					))}
			</ul>
			<hr />
			<ul>
				{allEvents.length &&
					allEvents.map((el, ind) => (
						<>
							{el.title && (
								<li>
									<Button>{el.title}</Button> <br />
									<br />
								</li>
							)}
						</>
					))}
			</ul>
		</div>
	)
}

export default EventList
