import React, { useState } from "react";
import {Modal,Button,Form,Container,Row,Col,} from "react-bootstrap";

const MovieFormModal = ({
  onChangeForm,
  showModal,
  handleClose,
  createMovie,
}) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");

  const currentYear = new Date().getFullYear();
  const numberOfYearsInPast = 50; // Change this value as needed

  const years = Array.from({ length: numberOfYearsInPast + 1 }, (_, index) =>
    (currentYear - index).toString()
  );

  const handleLocalFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reset form fields and selected file after submission
      setTitle("");
      setGenre("");
      setDirector("");
      setReleaseYear("");

      // Close the modal
      handleClose();
    } catch (error) {}
  };

  const handleModalHide = () => {
    // Reset form fields when the modal is closed
    setTitle("");
    setGenre("");
    setDirector("");
    setReleaseYear("");
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      onExited={handleModalHide}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Form onSubmit={handleLocalFormSubmit} onChange={(e) => onChangeForm(e)}>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" value={title}onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formGenre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control type="text" value={genre} onChange={(e) => setGenre(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formDirector">
                  <Form.Label>Director</Form.Label>
                  <Form.Control type="text" value={director} onChange={(e) => setDirector(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="formReleaseYear">
                  <Form.Label>Release Year</Form.Label>
                  <Form.Control as="select" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)}>
                    <option value="">Select Release Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <br></br>
                <Button variant="success" type="submit" onClick={(e) => createMovie()}>ok</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default MovieFormModal;
