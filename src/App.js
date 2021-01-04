import "bootstrap/dist/css/bootstrap.min.css";
import Greet from "./components/Greet";
import HookCounter from "./components/HookCounter";
import List from "./components/List";
import { Container, Row, Col, Card } from "react-bootstrap";
import PageHeader from "./components/PageHeader";
import "../src/App.scss";

function App() {
  return (
    <Container>
      <List></List>
    </Container>
  );
}

export default App;
