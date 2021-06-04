import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserMenuSider from "./components/UserMenuSider/UserMenuSider";

import ChatList from "./components/ChatList/ChatList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Registration />
        <Route exact path="/lc">
          <UserMenuSider />
        </Route>
        <ChatList />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
