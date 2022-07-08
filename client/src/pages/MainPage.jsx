import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "../components/Profile/ProfileForm";
import CreateEventModal from "../components/EventModals/CreateEventModal";
import EventList from "../components/EventList"
import { getCircleEventThunk } from "../redux/Actions/eventAC";
import Map from '../components/Map'

const MainPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);

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

  useEffect(() => {
    if (currentUser) {
      dispatch(getCircleEventThunk(currentUser._id));
    }
  }, [currentUser]);

  return (
    <>
      {currentUser.name ? (
        <>
          <div className="container--map">
            <Map />
          </div>
          <CreateEventModal />
          <EventList />
        </>
      ) : (
        <ProfileForm />
      )
      }
    </>
  );
};

export default MainPage;
