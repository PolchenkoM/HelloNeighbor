import style from './styles/style.sass'

import  {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes/Routes';
import CreateEventModal from './components/MainPage/EventModals/CreateEventModal';

const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");

function App() {

  return (
    <Router >
      <div className="App">
        <Header />
        <Routes />
      </div>
    <CreateEventModal/>
    </Router>
  );
}

export default App
