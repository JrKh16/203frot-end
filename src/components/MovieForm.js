import React, { useState } from "react";
import {Modal,Button,Form,Image,Container,Row,Col,} from "react-bootstrap";

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
  const [image, setImage] = useState(null);

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
      setImage(null);

      // Close the modal
      handleClose();
    } catch (error) {}
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setImage(file);
    } else {
      window.alert("Invalid file type. Please select a JPG or PNG file.");
      setImage(null);
    }
  };

  const handleModalHide = () => {
    // Reset form fields when the modal is closed
    setTitle("");
    setGenre("");
    setDirector("");
    setReleaseYear("");
    setImage(null);
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
              <div className="d-flex justify-content-center">
                <div className="card movie_card">
                  {image && (
                    <Image src={URL.createObjectURL(image)} thumbnail />
                  )}
                  <div className="card-body">
                    <p className="card-title">{title}&nbsp;</p>
                    <p className="movie_info genre">{genre}&nbsp;</p>
                    <span className="movie_info director">
                      {director}&nbsp;
                    </span>
                    <span className="movie_info float-end">
                      {releaseYear}&nbsp;
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <Form
                onSubmit={handleLocalFormSubmit}
                onChange={(e) => onChangeForm(e)}
              >
                <Form.Group controlId="formImage">
                  <Form.Label>Image</Form.Label>
                  <Form.Control type="file" onChange={handleImageChange} />
                </Form.Group>
                <Form.Group controlId="formTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formGenre">
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formDirector">
                  <Form.Label>Director</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter director"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formReleaseYear">
                  <Form.Label>Release Year</Form.Label>
                  <Form.Control
                    as="select"
                    value={releaseYear}
                    onChange={(e) => setReleaseYear(e.target.value)}
                  >
                    <option value="">Select Release Year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <br></br>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => createMovie()}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default MovieFormModal;
