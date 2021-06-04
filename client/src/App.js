<<<<<<< HEAD
import MainPage from "./components/MainPage/MainPage";


=======
import UserMenuSider from "./components/UserMenuSider/UserMenuSider";
import ChatList from "./components/ChatList/ChatList";


import Map from "./components/Map/Map";


const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");
>>>>>>> a2ae1c040020bcf67668e312611441a42cb265bd

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        <MainPage />
=======
      <Header />
      <Welcome />
      <UserMenuSider />
      <ChatList />
      <Map />
>>>>>>> a2ae1c040020bcf67668e312611441a42cb265bd
    </div>
  );
}

export default App;
