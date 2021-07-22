import style from "./styles/style.sass"
import { useEffect } from "react"

import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserGoogleThunk } from './redux/Actions/usersAC'
import HeaderLogged from './components/Header/HeaderLogged'
import HeaderUnlogged from './components/Header/HeaderUnlogged'
import ShowEventModal from './components/MainPage/EventModals/ShowEventModal'
import UserMenuSider from './components/MainPage/ProfileMenu/UserMenuSider'

function App() {
	const currentUser = useSelector(state => state.users.currentUser)
	const dispatch = useDispatch()

	useEffect(() => {
		window.gapi?.load('auth2', function () {
			window.gapi?.auth2
				.init({
					client_id:
						'213632962035-g4knv9je1q010p9lclqpuq2u73au46l3.apps.googleusercontent.com',
				})
				.then(
					() => console.log('init OK'),
					() => console.log('init error')
				)
		})
	}, [window.gapi])

	useEffect(() => {
		if (localStorage.email) {
			dispatch(getCurrentUserGoogleThunk(localStorage.email))
		} else {
			console.log(111)
		}
	}, [])

	return (
		<Router>
			<div className='App'>
				<div className='container-fullscreen'>
					<div className='container--main'>
						{currentUser.email ? <HeaderLogged /> : <HeaderUnlogged />}
						{currentUser.email ? <UserMenuSider/>: ''}
						<div className='container--content'>
							<Routes />
              <ShowEventModal/>
						</div>
					</div>
				</div>
			</div>
		</Router>
	)
}

export default App;
