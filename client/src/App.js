import style from './styles/style.sass'

import  {BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes/Routes';

const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");

function App() {

  return (
    <Router >
      <div className="App">
        <Header />
        <Routes />
      </div>

    </Router>
  );
}

export default App
