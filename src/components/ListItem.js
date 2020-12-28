import React from 'react'
import { Card, Button } from "react-bootstrap";


function ListItem({ props, setShowMore }) {
   

    return (
      <Card className="h-100 shadow-sm bg-black rounded" key={props.id}>
        <Card.Img
          variant="top"
          src={props.imagttt}
          alt={`${props.name} Picture`}
        />
        <Card.Body className="d-flex flex-column">
          <div className="d-flex mb-2 justify-content-between">
            <Card.Title className="mb-1 font-weight-bold">{props.name}</Card.Title>
          </div>
            <Card.Text className="text-secondary">
              Orgin: {props.origin.name}
                </Card.Text>
                <Button onClick={() => setShowMore()} className="mt-auto font-weight-bold"
                variant="info" block>Show More</Button>
        </Card.Body>
      </Card>
    );
}

 
export default ListItem

