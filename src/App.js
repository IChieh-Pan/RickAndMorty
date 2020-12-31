import "bootstrap/dist/css/bootstrap.min.css";
import Greet from "./components/Greet";
import HookCounter from "./components/HookCounter";
import List from "./components/List";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./_List.scss";
import PageHeader from "./components/PageHeader";
import "../src/App.scss";
import Pagination from "./components/Pagination";

function App() {
  return (
    <Container>
      <PageHeader />
      <List></List>
      <Pagination />
    </Container>
  );
}

export default App;
