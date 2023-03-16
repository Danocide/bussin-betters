import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCreate(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
       <button onClick={handleShow}className="btn btn-primary" type="button" style={{ height: '45px', padding: '0 20px', fontSize: '16px', marginRight: '6px', marginBottom: '15px', borderRadius: '0' }}>Bet Now!</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.home_team} - {props.away_team}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body d-flex flex-row justify-content-around" style={{padding: '19px'}}>
        <div style={{textAlign: 'center', marginBottom: '-15px', marginRight: '45px'}}>
          <p style={{width: '150px'}}>Home: {props.home_odds}</p>
          <p style={{width: '150px'}}>Away: {props.away_odds}</p>
          <p style={{width: '150px'}}>Fav: {props.fav_name}/ {props.fav_odds}</p>
        </div>
        <h1 className="align-self-center" style={{marginRight: '25px'}}>Dog: {props.dog_name}/ {props.dog_odds} </h1>
      </div>
        </Modal.Body>
        <Modal.Footer>
        <input type="text" placeholder="Amount..." style={{marginRight: '50px', marginTop: '4px'}} />
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