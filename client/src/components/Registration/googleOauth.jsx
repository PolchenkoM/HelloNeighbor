import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import {getCurrentUserGoogleThunk} from  '../../redux/Actions/usersAC'

function Registration() {

  const [googleUser, setGoogleUser] = useState(localStorage);
  const dispatch = useDispatch()



  const googleSignIn = () => {
    const authOk = (googleUser) => {
      const id = googleUser.getBasicProfile().getId()
      const username = googleUser.getBasicProfile().getGivenName()
      const email = googleUser.getBasicProfile().getEmail()
      dispatch(getCurrentUserGoogleThunk(email))
      localStorage.setItem("email", email)
      setGoogleUser(localStorage)
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


  return (
    <>
      {googleUser.user && <p>Здарова {googleUser.user}</p>}
      <Button onClick={googleSignIn} type="primary">
        googleAuth
      </Button>
      <Button onClick={signOut} type="primary">
        sign out
      </Button>
      {/* <Button onClick={signUp} type="primary">
        sign up
      </Button> */}
    </>
  );
}

export default Registration;
