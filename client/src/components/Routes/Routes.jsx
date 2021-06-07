import {Route,Switch} from 'react-router-dom'
import About from '../About/About'
import MainPage from '../MainPage/MainPage'
import Support from '../Support/Support'
import Welcome from '../Welcome/Welcome'


const Routes = () => {
  
  return (
    <Switch >
      <Route path={'/about'} component={About}/>
      <Route path={'/support'} component={Support}/>
      <Route path={'/:nickname'} component={MainPage} /> 
      <Route path={'/'} component={Welcome} />
    </Switch>
    
  )
}

export default Routes
