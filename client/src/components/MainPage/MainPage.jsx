import UserMenuSider from './UserMenuSider/UserMenuSider'
import Map from './Map/Map'
import EventList from './EventList/EventList'
import CreateEventModal from './EventModals/CreateEventModal'


const MainPage = () => {
	return (
		<div className='container-mt'>
			<div className='containerMain'>
				<UserMenuSider />
				<div className='containerMap'>
					<Map />
				</div>
				<CreateEventModal />
				<EventList />
			</div>
		</div>
	)
}

export default MainPage
