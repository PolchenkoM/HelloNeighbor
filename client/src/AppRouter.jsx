import { Route, Switch } from 'react-router-dom'
import CurrentEvents from './pages/CurrentEvents'
import Friends from './pages/Friends'
import History from './pages/History'
import MainPage from './pages/MainPage'
import Profile from './pages/Profile'
import WelcomePage from './pages/WelcomePage'

export default function AppRouter() {
	return (
		<Switch>
			<Route path={'/currentEvents'} component={CurrentEvents} />
			<Route path={'/profile'} component={Profile} />
			<Route path={'/friends'} component={Friends} />
			<Route path={'/history'} component={History} />
			{localStorage.email ? (
				<Route path={'/'} component={MainPage} />
			) : (
				<Route path={'/'} component={WelcomePage} />
			)}
		</Switch>
	)
}
