import CreateEventModal from '../MainPage/EventModals/CreateEventModal'
import ShowEventModal from '../MainPage/EventModals/ShowEventModal'
import Body from './Body/Body'
import Footer from './Footer/Footer'

export default function Welcome() {
	return (
		<>
			<Body />
			<Footer />
      <CreateEventModal/>
      <ShowEventModal/>
		</>
	)
}
