import React, { useState, useEffect } from "react";
import "./_List.scss";

import {
  Container,
  Row,
  Card,
  Button,
  Modal,
  ListGroup,
  Image,
} from "react-bootstrap";
// import ModalDialog from "./ModalDialog";

function ListItem(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log('show', handleShow)

  /*   const handleShow = () => {
    setShow((prev) => !prev);
  }; */

  return (
    <Container>
      <Card className="h-100 shadow-sm bg-black rounded" key={props.id}>
        <Card.Img
          variant="top"
          src={props.imagt}
          alt={`${props.name} Picture`}
        />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-1 font-weight-bold">
              {props.name}
            </Card.Title>
          </div>
          <Card.Text className="text-secondary">
            Orgin: {props.origin.name}
          </Card.Text>
          <Button
            variant="outline-info"
            onClick={handleShow}
            className="mt-auto font-weight-bold"
            block
          >
            Show More
          </Button>
        </Card.Body>
      </Card>

      {/* <ModalDialog show={show} setShow={setShow} /> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ml-3">{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-block text-center">
            <Image src={props.imagt} roundedCircle></Image>
          </div>
          <ListGroup className="mt-4 mr-5 ml-5">
            <ListGroup.Item variant="none">
              Species: {props.species}
            </ListGroup.Item>
            <ListGroup.Item variant="none">
              {" "}
              Gender: {props.gender}
            </ListGroup.Item>
            <ListGroup.Item variant="none">
              Status: {props.status}
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ListItem;
