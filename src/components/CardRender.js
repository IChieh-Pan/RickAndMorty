import React from 'react'
import { Card, CardImg } from "react-bootstrap"

function CardRender(props) {
    return (
        <Card className="h-100 shadow-sm bg-white rounded">
            <Card.Img variant="top" src={props.image} />
            <Card.Body className="d-flex flex-column">
                <div>
                    <Card.Title>{props.name}</Card.Title> 
                </div>
            </Card.Body>

            
        </Card>
    )
}

export default CardRender;
