import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, ListGroup, Image } from "react-bootstrap";
// import ModalDialog from "./ModalDialog";



function ListItem( props ) {
    const [show, setShow] = useState(false);
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // console.log('show', handleShow)
    
/*   const handleShow = () => {
    setShow((prev) => !prev);
  }; */

    return (
      <>
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
              variant="outline-secondary"
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
            <Modal.Title>{props.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={props.imagt} roundedCircle></Image>
            <ListGroup variant="flush">
              <ListGroup.Item>Species: {props.species}</ListGroup.Item>
              <ListGroup.Item> Gender: {props.gender}</ListGroup.Item>
              <ListGroup.Item>Status: {props.status}</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
}

 
export default ListItem

