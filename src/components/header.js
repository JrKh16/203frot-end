import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
export function getnumberOfMovies() {
  return;
}
export const Header = ({ onInsertClick, onSearch, numberOfMovies }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top bg-light">
      <Container fluid>
        <Navbar.Brand href="">Movies Search </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="me-auto my-2 my-lg-0" onClick={onInsertClick}>Insert</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
          <Form className="d-flex">
            <Nav.Link disabled>
              Number of Movies: {numberOfMovies} &nbsp;
            </Nav.Link>
          </Form>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => onSearch(e)}
            />
          </Form>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
