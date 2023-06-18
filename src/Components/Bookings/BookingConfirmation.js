import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function BookingConfirmation({ setShowModal, showModal, date, time, numGuests, occasion }) {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Booking Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Thank you for choosing Little Lemon!</p>
        <p>Your booking details are:</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Number of Guests: {numGuests}</p>
        <p>Occasion: {occasion}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default BookingConfirmation;
