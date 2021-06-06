import style from './styles/style.sass'
import MainPage from "./components/MainPage/MainPage";
import ChatList from "./components/ChatList/ChatList";
import Map from "./components/Map/Map";

const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Welcome />
      <ChatList />
      <Map />
    </div>
  );
}

export default App
