import UserMenuSider from './UserMenuSider/UserMenuSider';
import Map from './Map/Map'
import EventList from './EventList/EventList';
import CreateEventModal from './EventModals/CreateEventModal';

const MainPage = () =>  {

  return (
    <div className='containerMain'>
      <UserMenuSider /> 
      <div className='containerMap'>
        <div ></div>
        <Map />
      </div>
      <CreateEventModal/>
      <EventList />
    </div>
  )
}

export default MainPage
