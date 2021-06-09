import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {getCurrentUserGoogleThunk} from  '../../redux/Actions/usersAC'
import { useHistory } from "react-router";

function Registration() {

  const [googleUser, setGoogleUser] = useState(localStorage);
  const dispatch = useDispatch()
  const history = useHistory()

  const googleSignIn = () => {

    
    const authOk = (googleUser) => {
      const id = googleUser.getBasicProfile().getId()
      const username = googleUser.getBasicProfile().getGivenName()
      const email = googleUser.getBasicProfile().getEmail()
      dispatch(getCurrentUserGoogleThunk(email))
      localStorage.setItem("email", email)
      setGoogleUser(localStorage)
      history.push('/')
    };
    
    const authErr = (e) => {
      console.log("Auth err", e);
    };
    
    const GoogleAuth = window.gapi?.auth2?.getAuthInstance();
    GoogleAuth.signIn({
      scope: "profile email",
    }).then(authOk, authErr);
  };
  
  const signOut = () => {
    const GoogleAuth = window.gapi?.auth2?.getAuthInstance();
    GoogleAuth.signOut().then(
      () => {
        localStorage.clear();
        setGoogleUser("");
      },  
      () => console.log("signout Error")
      );
    };
    
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
      }, [window.gapi]);
    
    return (
      <>
      {googleUser.user && <p>Здарова {googleUser.user}</p>}
      <Button onClick={googleSignIn} type="primary">
        googleAuth
      </Button>
      <Button onClick={signOut} type="primary">
        sign out
      </Button>
    </>
  );
}

export default Registration;
