
import Registration from "./components/Refistration/Registration";

import UserMenuSider from "./components/UserMenuSider/UserMenuSider";


import ChatList from "./components/ChatList/ChatList";

function App() {
  return (
    <div className="App">

     <Registration/>

        <UserMenuSider />
     <ChatList/>

    </div>
  );
}

export default App;
