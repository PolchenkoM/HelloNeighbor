import UserMenuSider from './UserMenuSider/UserMenuSider';
import Map from './Map/Map'
import ShowEventModal from './EventModals/ShowEventModal';

const MainPage = () =>  {

  return (
    <div className='containerMain'>
      <UserMenuSider /> 
      <div className='containerMap'>
        <div ></div>
        <Map />
      </div>
      {/* <div >
        <UserMenuSider /> 
      </div> */}
      <ShowEventModal />
    </div>
  )
}

export default MainPage
