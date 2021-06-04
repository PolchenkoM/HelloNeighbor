const { default: Header } = require("./components/Header/Header");
const { default: Welcome } = require("./components/Welcome/Welcome");


function App() {
  return (
    <div className="App">
     <Header/>
     
     <Welcome/>
    </div>
  );
}

export default App;
