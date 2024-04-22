import React, {useState} from 'react'
import {Card, Modal} from 'react-bootstrap'

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card>
        <Card.Img onClick={handleShow} height={'180px'} variant="top" src="https://tse1.mm.bing.net/th?id=OIP.yRAeJYYp6kE0zDyp09VkPwHaD2&pid=Api&P=0&h=180" />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between'>
            <p>Caption</p>
            <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="311" src="https://www.youtube.com/embed/L0yEMl8PXnw?autoplay=1" title="Caption" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard