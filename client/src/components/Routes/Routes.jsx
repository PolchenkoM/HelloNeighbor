import {Route,Switch} from 'react-router-dom'
import About from '../About/About'
import MainPage from '../MainPage/MainPage'
import Support from '../Support/Support'
import Welcome from '../Welcome/Welcome'
import Friends from '../ProfileMenu/Friends/Friends'
import { useSelector } from 'react-redux'

import { useSelector } from 'react-redux'


const Routes = () => {
  
  const { currentUser } = useSelector((state) => state.users.currentUser);


const Routes = () => {
  
  const currentUser = useSelector(state => state.users.currentUser)

  return (
    <Switch >
      <Route path={'/about'} component={About}/>
      <Route path={'/support'} component={Support}/>
      <Route path={'/friends'} component={Friends}/>
      <Route path={'/nickname'} component={MainPage} />
      {localStorage.email ? <Route path={'/'} component={MainPage} /> : <Route path={'/'} component={Welcome} />}
    </Switch>
    
  )
}

export default Routes
