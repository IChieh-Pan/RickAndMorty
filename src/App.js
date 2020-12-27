import "./App.css";
import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css";
import Greet from "./components/Greet";
import HookCounter from "./components/HookCounter";
import List from "./components/List"



function App() {
  return (
    <div className="App">
     
      <Greet name="C" assName="Cat" />
      <HookCounter></HookCounter>
      
      <List></List>
     
    </div>
  );
}

export default App;
