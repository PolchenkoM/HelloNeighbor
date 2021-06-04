import UserMenuSider from "./components/UserMenuSider/UserMenuSider";
import ChatList from "./components/ChatList/ChatList";
import Map from './components/Map/Map'


function App() {
  return (
    <div className="App">
        <UserMenuSider />
     <ChatList/>
      <Map/>
    </div>
  );
}

export default App;
