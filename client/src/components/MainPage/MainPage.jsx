import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import UserMenuSider from "./UserMenuSider/UserMenuSider"
import Profile from "../ProfileMenu/Profile/Profile"
import Map from "./Map/Map"
import { getCircleEventThunk } from "../../redux/Actions/eventAC"

const MainPage = () => {
	const dispatch = useDispatch()
	const currentUser = useSelector((state) => state.users.currentUser)

	useEffect(() => {
		window.gapi?.load("auth2", function () {
			window.gapi?.auth2
				.init({
					client_id: "213632962035-g4knv9je1q010p9lclqpuq2u73au46l3.apps.googleusercontent.com"
				})
				.then(
					() => console.log("init OK"),
					() => console.log("init error")
				)
		})
	}, [])

	useEffect(() => {
		if (currentUser) {
			console.log("currentUser._id", currentUser._id)
			dispatch(getCircleEventThunk(currentUser._id))
		}
	}, [currentUser])

	return (
		<>
			{currentUser.name ? (
				<div className='container-mt'>
					<div className='containerMain'>
						<UserMenuSider />
						<div className='containerMap'>
							<Map />
						</div>
					</div>
				</div>
			) : (
				<Profile />
			)}
		</>
	)
}

export default MainPage
