import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/header.css"; // Assuming you have a separate CSS file for your header styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ onInsertClick, onSearch, numberOfMovies }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <Navbar expand="lg" className="fixed-top navbar-line">
      <Container fluid>
        <div className="logo-container">
          <div className="logo" onClick={onInsertClick}>
            <h3>Movies 007</h3>
            <h6>(add Movies)</h6>
          </div>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            {/* Your Nav Links */}
          </Nav>
          <Nav className="ml-auto">
            <Form className="d-flex">
              <div className="movies-count"><h5>Movies all: {numberOfMovies}</h5> </div>
            </Form>
            <Form className="d-flex">
              {isSearchVisible && (
                <React.Fragment>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search-input"
                    aria-label="Search"
                    onChange={(e) => onSearch(e)}
                  />
                  <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleSearchClick} />
                </React.Fragment>
              )}
              {!isSearchVisible && (
                <FontAwesomeIcon icon={faSearch} className="search-icon" onClick={handleSearchClick} />
              )}
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
