import React, { useEffect, useState } from "react";
import { Button } from "antd";

function Registration() {

  const [googleUser, setGoogleUser] = useState(localStorage);

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


  const signIn = () => {

    const authOk = (googleUser) => {
      const user = googleUser.getBasicProfile().getName()
      localStorage.setItem('user', user)
      setGoogleUser(localStorage)
    };
    
    const authErr = () => {
      console.log("Auth err");
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
      localStorage.clear()
      setGoogleUser("")
    }, () => console.log('signout Error')) 
  }



  return (
    <>
      {googleUser.user && <p>Здарова {googleUser.user}</p>}
      <Button onClick={signIn} type="primary">
        log in
      </Button>
      <Button onClick={signOut} type="primary">
        sign out
      </Button>
    </>
  );
}

export default Registration;
