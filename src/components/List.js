import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { Container, Card, Row, Col }from "react-bootstrap";




function List() {
  const [data, setData] = useState({});
  const [characters, setCharacters] = useState([]);
  // const [showMore, setShowMore] = useState(false);

  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=2");
      const data = await response.json();
      // const item = data.results;
      console.log("data :>> ", data);
      
      const item = Object.values(data);
      console.log("item :>> ", item);
      const characters = item[1];
      console.log("characters :>> ", characters);
      setCharacters(characters);
    }
    
  return (
    <Container>
      <Row>
        {characters && characters.map((characters) => {
          const { id, name, image, origin, status, species, gender } = characters;
          return (
            <Col md={4} className="mb-5">
              <ListItem
                key={characters.id}
                imagt={characters.image}
                name={characters.name}
                origin={characters.origin}
                gender={characters.gender}
                species={characters.species}
                status={characters.status}
              />
            </Col>
          );})}
      </Row>
    </Container>
  );
  
}
export default List;
