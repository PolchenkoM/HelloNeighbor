import { useEffect } from "react"
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserGoogleThunk } from './redux/Actions/usersAC'
import HeaderLogged from './components/Header/HeaderLogged'
import HeaderUnlogged from './components/Header/HeaderUnlogged'
import ShowEventModal from './components/EventModals/ShowEventModal'
import SideBar from './components/SideBar'
import style from "./styles/style.sass"

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
		<BrowserRouter>
			<div className='App'>
				<div className='container-fullscreen'>
					<div className='container--main'>
						{currentUser.email ? <HeaderLogged /> : <HeaderUnlogged />}
						{currentUser.email ? <SideBar/>: ''}
						<div className='container--content'>
							<AppRouter />
              <ShowEventModal/>
						</div>
					</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
