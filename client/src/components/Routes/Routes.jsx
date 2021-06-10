import {Route,Switch} from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import Welcome from '../Welcome/Welcome'
import CurrentEvents from '../ProfileMenu/CurrentEvents/CurrentEvents'
import Profile from '../ProfileMenu/Profile/Profile'
import Friends from '../ProfileMenu/Friends/Friends'
import History from '../ProfileMenu/History/History'

import { useSelector } from 'react-redux'


const Routes = () => {
  
  const currentUser = useSelector(state => state.users.currentUser)

  return (
    <Switch >
      <Route path={'/currentEvents'} component={CurrentEvents}/>
      <Route path={'/profile'} component={Profile}/>
      <Route path={'/friends'} component={Friends}/>
      <Route path={'/history'} component={History}/>
      {localStorage.email ? <Route path={'/'} component={MainPage} /> : <Route path={'/'} component={Welcome} />}
    </Switch>
    
  )
}

export default Routes
