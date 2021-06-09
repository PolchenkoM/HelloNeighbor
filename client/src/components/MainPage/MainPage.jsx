import { useSelector } from "react-redux"
import Map from "./Map/Map"
import UserMenuSider from "./UserMenuSider/UserMenuSider"
import EventList from "./EventList/EventList"
import CreateEventModal from "./EventModals/CreateEventModal"
import Profile from "../ProfileMenu/Profile/Profile"

const MainPage = () => {
	const currentUser = useSelector((state) => state.users.currentUser)

	return (
		<div>
			{currentUser.name ? (
				<div className='containerMain'>
					<UserMenuSider />
					<div className='containerMap'>
						<div></div>
						<Map />
					</div>
					<CreateEventModal />
					<EventList />
				</div>
			) : (
				<Profile />
			)}
		</div>
	)
}

export default MainPage
