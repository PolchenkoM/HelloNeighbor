// import React, { useEffect, useState } from "react";
// import { Button } from "antd";

// function Registration() {
//   const [googleUser, setGoogleUser] = useState(localStorage);

//   useEffect(() => {
//     window.gapi?.load("auth2", function () {
//       window.gapi?.auth2
//         .init({
//           client_id:
//             "213632962035-g4knv9je1q010p9lclqpuq2u73au46l3.apps.googleusercontent.com",
//         })
//         .then(
//           () => console.log("init OK"),
//           () => console.log("init error")
//         );
//     });
//   }, []);

//   const googleSignIn = () => {
//     const authOk = (googleUser) => {

//       const user = googleUser.getBasicProfile().getName()
//       const id = googleUser.getBasicProfile().getId()
//       localStorage.setItem('user', user)
//       localStorage.setItem('id', id)
//       setGoogleUser(localStorage)
//     };
    
//     const authErr = (e) => {
//       console.log("Auth err", e);
//     };

//     const GoogleAuth = window.gapi?.auth2?.getAuthInstance();
//     GoogleAuth.signIn({
//       scope: "profile email",
//     }).then(authOk, authErr);
//   };

//   const signOut = () => {
//     const GoogleAuth = window.gapi?.auth2?.getAuthInstance();
//     GoogleAuth.signOut().then(
//       () => {
//         localStorage.clear();
//         setGoogleUser("");
//       },
//       () => console.log("signout Error")
//     );
//   };

//   const signUp = () => {};

//   return (
//     <>
//       {googleUser.user && <p>Здарова {googleUser.user}</p>}
//       <Button onClick={googleSignIn} type="primary">
//         googleAuth
//       </Button>
//       <Button onClick={signOut} type="primary">
//         sign out
//       </Button>
//       <Button onClick={signUp} type="primary">
//         sign up
//       </Button>
//     </>
//   );
// }

// export default Registration;
