import "./App.css";
import Greet from "./components/Greet";
import HookCounter from "./components/HookCounter";
// import Welcome from "./components/Welcome";
import List from "./components/List"




function App() {
  return (
    <div className="App">
     
      <Greet name="C" assName="Cat" />
      <HookCounter></HookCounter>
      
      <List></List>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
