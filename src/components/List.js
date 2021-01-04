import React, { useState, useEffect } from "react";
import ListItem from "./ListItem";
import PageHeader from "./PageHeader";
import {
  Container,
  Card,
  Row,
  Col,
  Pagination,
  Button,
  Form,
  FormControl,
  Navbar,
} from "react-bootstrap";

import "./_List.scss";
import "./_Pagination.scss";

function List() {
  const [data, setData] = useState({});
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, [page, searchTerm]);

  const fetchData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}`
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

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("searchTerm", searchTerm);
    setSearchTerm();
  };

  const input = ({ target: { searchTerm } }) => setSearchTerm(searchTerm);

  const nextHandler = (event) => {
    event.preventDefault();
    if (page < info.pages) {
      setPage(page + 1);
    } else {
      setPage(page);
    }
  };

  const prevHandler = (event) => {
    event.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  return (
    <Container>
      <PageHeader />
      <Navbar className="bg-light justify-content-end mb-3">
        <Form onSubmit={onFormSubmit} inline>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={input}
            value={searchTerm}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
      
      <div className="d-flex justify-content-between mb-3">
        <Button
          variant="dark"
          href="#"
          class="previous"
          size="sm"
          onClick={(event) => prevHandler(event)}
          disabled={page === 1}
        >
          &#8249; &nbsp; Previous Page
        </Button>
        <Button
          variant="dark"
          href="#"
          class="next"
          size="sm"
          onClick={(event) => nextHandler(event)}
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
