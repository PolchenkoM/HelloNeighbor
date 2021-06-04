const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");


import Registration from "./components/Refistration/Registration";

import UserMenuSider from "./components/UserMenuSider/UserMenuSider";


import ChatList from "./components/ChatList/ChatList";

function App() {
  return (
    <div className="App">
     <Header/>
     <Welcome/>
     <Registration/>
    <UserMenuSider />
     <ChatList/>

    </div>
  );
}

export default App;
