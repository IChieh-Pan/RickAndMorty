import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import { Container, Card, Row, Col, Pagination } from "react-bootstrap";
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
    console.log("characters :>> ", characters);
    setCharacters(characters);
    setInfo(info);
  };

  const nextHandler = (event) => {
    event.preventDefault();
    if (page <= info.pages) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const prevHandler = (event) => {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(info.pages);
    }
  };

  return (
    <Container>
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

      <div>
        <div>
          <a href="#" class="previous" onClick={(e) => prevHandler(e)}>
            &#8249; &nbsp; Previous
          </a>
          <a href="#" class="next" onClick={(e) => nextHandler(e)}>
            Next &nbsp; &#8250;
          </a>
        </div>
      </div>
    </Container>
  );
}
export default List;
