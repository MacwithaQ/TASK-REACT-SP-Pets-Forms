import { Modal, Button, Form } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import petStore from "../petStore";

const PetUpdateModal = ({ pet }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [petInfo, setPetInfo] = useState({
    id: pet.id,
    name: pet.name,
    type: pet.type,
    image: pet.image,
  });

  const handleChange = (event) => {
    setPetInfo({
      ...petInfo,
      [event.target.name]: event.target.value,
    });
  };
  const petSubmit = (event) => {
    event.preventDefault();
    petStore.updatePet(petInfo);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Pet Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Pet Details</Modal.Title>
        </Modal.Header>
        <Form onSubmit={petSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              defaultValue={petInfo.name}
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
              defaultValue={petInfo.type}
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
                defaultValue={petInfo.image}
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
    </>
  );
};

export default PetUpdateModal;
