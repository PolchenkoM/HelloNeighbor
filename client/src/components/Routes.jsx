import {Route,Switch} from 'react-router-dom'
import MainPage from './MainPage/MainPage'
import WelcomePage from './WelcomePage'
import CurrentEvents from './MainPage/ProfileMenu/CurrentEvents/CurrentEvents'
import Profile from './MainPage/ProfileMenu/Profile/Profile'
import Friends from './MainPage/ProfileMenu/Friends/Friends'
import History from './MainPage/ProfileMenu/History/History'


const Routes = () => {

  return (
    <Switch >
      <Route path={'/currentEvents'} component={CurrentEvents}/>
      <Route path={'/profile'} component={Profile}/>
      <Route path={'/friends'} component={Friends}/>
      <Route path={'/history'} component={History}/>
      {localStorage.email ? <Route path={'/'} component={MainPage} /> : <Route path={'/'} component={WelcomePage} />}
    </Switch>
    
  )
}

export default Routes
