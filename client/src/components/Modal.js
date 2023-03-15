import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        More Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Home_Team - Away_Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body d-flex flex-row justify-content-around" style={{padding: '19px'}}>
        <div style={{textAlign: 'center', marginBottom: '-15px', marginRight: '45px'}}>
          <p style={{width: '150px'}}>Bet_Info</p>
          <p style={{width: '150px'}}>Bet_Info</p>
          <p style={{width: '150px'}}>Bet_Info</p>
        </div>
        <h1 className="align-self-center" style={{marginRight: '25px'}}>34 - 12</h1>
      </div>
        </Modal.Body>
        <Modal.Footer>
        <input type="text" style={{marginRight: '50px', marginTop: '4px'}} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Bet Now!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreate;