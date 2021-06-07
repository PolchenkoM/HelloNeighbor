import {Route,Switch} from 'react-router-dom'
import About from '../About/About'
import MainPage from '../MainPage/MainPage'
import Support from '../Support/Support'
import Welcome from '../Welcome/Welcome'
import Friends from '../ProfileMenu/Friends/Friends'


const Routes = () => {

  return (
    <Switch >
      <Route path={'/about'} component={About}/>
      <Route path={'/support'} component={Support}/>
      <Route path={'/friends'} component={Friends}/>
      <Route path={'/nickname'} component={MainPage} />
      {localStorage.id ? <Route path={'/'} component={MainPage} /> : <Route path={'/'} component={Welcome} />}
  
    </Switch>
    
  )
}

export default Routes
