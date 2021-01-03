import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { Container, Card, Row, Col, Pagination, Button } from "react-bootstrap";
import "./_List.scss";
// import Pagination from "./Pagination";

function List() {
  const [data, setData] = useState({});
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [page]);

  /*   const nextPage = () => {
    let setPage = page + 1;
    nextPage(setPage);
  }; */

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const data = await response.json();
    // const item = data.results;
    console.log("data :>> ", data);

    const item = Object.values(data);
    console.log("item :>> ", item);
    const characters = item[1];
    const info = item[0];
    console.log("itemxx", info);
    console.log("characters :>> ", characters);
    setCharacters(characters);
    setInfo(info);
  };

  const nextHandler = (event) => {
    // event.preventDefault();
    if (page < info.pages) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  };

  const prevHandler = (event) => {
    // event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  /*  const noPrevPage = () => {
    if (setPage === 1) {
      document.getElementById("prevBtn").disabled = true;
    }
  }; */

  return (
    <Container>
      <div className="d-flex justify-content-between mb-3">
        <Button
          variant="dark"
          href="#"
          class="previous"
          id="prevBtn"
          size="sm"
          onClick={(e) => prevHandler(e)}
          disabled={page === 1}
        >
          &#8249; &nbsp; Previous Page
        </Button>
        <Button
          variant="dark"
          href="#"
          class="next"
          id="nextBtn"
          size="sm"
          onClick={(e) => nextHandler(e)}
          disabled={page === info.pages}
        >
          Next Page &nbsp; &#8250;
        </Button>
      </div>

      <Row>
        {characters &&
          characters.map((characters) => {
            const {
              id,
              name,
              image,
              origin,
              status,
              species,
              gender,
            } = characters;
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
            );
          })}
      </Row>
    </Container>
  );
}
export default List;
