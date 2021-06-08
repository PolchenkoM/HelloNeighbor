import UserMenuSider from "./UserMenuSider/UserMenuSider";
import Map from "./Map/Map";
import EventList from "./EventList/EventList";
import CreateEventModal from "./EventModals/CreateEventModal";
import { useEffect } from 'react'


const MainPage = () => {
  useEffect(() => {
    window.gapi?.load("auth2", function () {
      window.gapi?.auth2
        .init({
          client_id:
            "213632962035-g4knv9je1q010p9lclqpuq2u73au46l3.apps.googleusercontent.com",
        })
        .then(
          () => console.log("init OK"),
          () => console.log("init error")
        );
    });
  }, []);
  return (
    <div className="container-mt">
      <div className="containerMain">
        <UserMenuSider />
        <div className="containerMap">
          <Map />
        </div>
        <CreateEventModal />
        <EventList />
      </div>
    </div>
  );
};

export default MainPage;
