
import style from "./styles/style.sass";
import { useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserGoogleThunk } from "./redux/Actions/usersAC";


const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");

function App() {

  const { currentUser } = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();

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
    if (localStorage.email) {
      dispatch(getCurrentUserGoogleThunk(localStorage.email))
    } else {
      console.log(111);
    }
  }, []);

  return (    
    <Router >
      <div className="App">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
