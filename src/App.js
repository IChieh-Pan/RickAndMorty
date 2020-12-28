import "./App.css";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Greet from "./components/Greet";
import HookCounter from "./components/HookCounter";
import List from "./components/List";
import { Container, Row, Col, Card } from 'react-bootstrap';

import React, {useState} from "react"


function App() {

  const [data, showMore] = useState(false);
  
  

  return (
    
      <Container>
        
          <List></List>
        
      </Container>
     
    
  );
}

export default App;
