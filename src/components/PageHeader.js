import React, { useState } from "react";
import mortysmith from "./mortysmith.png";
import rick_and_morty_logo from "./rick_and_morty_logo.png";
import "./_PageHeader.scss";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function PageHeader() {
  const [searchTerm, setSearchTerm] = useState("");

  // const [value, setValue] = useState();
  let onFormSubmit = (e) => {
    e.preventDefault();
    console.log("searchTerm", searchTerm);
    setSearchTerm();
  };

  return (
    <div className="mt-4 mb-1">
      <div className="align-items-baseline d-block justify-content-between">
        <img src={rick_and_morty_logo} alt="logo" width="350" />
        <img className="ml-3" src={mortysmith} alt="logo" height="90" />
      </div>
      <div className="d-inline-block">
        <div className="subTitle">
          100 totally useless facts about Rick & Morty!
        </div>
      </div>

      <Navbar className="bg-light justify-content-end">
        <Form onSubmit={onFormSubmit} inline>
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
      <div className="imgContainer"></div>
    </div>
  );
}

export default PageHeader;
