import React from "react";
import mortysmith from "./mortysmith.png";
import rick_and_morty_logo from "./rick_and_morty_logo.png";
import "./_PageHeader.scss";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function PageHeader() {
  // const [search, setSearch] = useState("")
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
        <Form inline>
          <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
          <Button type="submit">Submit</Button>
        </Form>
      </Navbar>
      <div className="imgContainer"></div>
    </div>
  );
}

export default PageHeader;
