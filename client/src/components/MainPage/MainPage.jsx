import UserMenuSider from './UserMenuSider/UserMenuSider';
import Map from './Map/Map'

const MainPage = () =>  {

  return (
    <div className='containerMain'>
      <UserMenuSider /> 
      <div className='containerMap'>
        <div ></div>
        <Map />
      </div>
      <div >
        <UserMenuSider /> 
      </div>
    </div>
  )
}

export default MainPage
