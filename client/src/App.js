
import UserMenuSider from "./components/UserMenuSider/UserMenuSider";
import ChatList from "./components/ChatList/ChatList";
import style from './styles/style.sass'

import Map from "./components/Map/Map";


const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <UserMenuSider />
      <ChatList />
      <Map />
    </div>
  );
}

export default App
