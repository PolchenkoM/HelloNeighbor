import style from './styles/style.sass'
import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserGoogleThunk } from './redux/Actions/usersAC'
import HeaderUnlogged from './components/Header/HeaderUnlogged'
import HeaderLogged from './components/Header/HeaderLogged'
import ShowEventModal from './components/MainPage/EventModals/ShowEventModal'

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
        <ShowEventModal/>
				{currentUser.email ? <HeaderLogged /> : <HeaderUnlogged />}
				<div className='container-mt'>
					<Routes />
				</div>
			</div>
		</Router>
	)

}

export default App
