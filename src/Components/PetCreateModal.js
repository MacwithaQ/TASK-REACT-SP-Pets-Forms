import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import petStore from "../petStore";

const PetCreateModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [petInfo, setPetInfo] = useState({
    name: "",
    type: "",
    image: "",
  });

  const prevSubmit = (event) => {
    event.preventDefault();
    petStore.addPet(petInfo);
    handleClose();
  };

  const handleChange = (event) => {
    setPetInfo({
      ...petInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Pet Create
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create A Pet</Modal.Title>
        </Modal.Header>
        <Form onSubmit={prevSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Pet Type</Form.Label>
            <Form.Select
              name="type"
              onChange={handleChange}
              aria-label="Default select example"
              required
            >
              <option value="">Select menu</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </Form.Select>
            <Form.Group
              name="image"
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Pet Image URL</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="image"
                type="url"
                placeholder="Enter image URL"
                required
              />
            </Form.Group>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default PetCreateModal;
