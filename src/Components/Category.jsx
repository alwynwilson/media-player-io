import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Category() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-around">
        <h3>All Categories</h3>
        <button onClick={handleShow} className='btn btn-secondary ms-3 rounded-circle bg-warning fw-bolder fs-5'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
          controlId="floatingInput"
          label="Category name"
          className="mb-3" centered
          >
            <Form.Control type="text" placeholder="Category name" />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category