import React, { useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import BookingConfirmation from './BookingConfirmation';

function BookingForm(props) {
  const { handleDateChange, availableBookingTimes, handleSubmit, errorMsgs, validateField, setShowModal, showModal } = props;
  const res = ['10:00', '11:00', '12:00'];  
  const today = new Date().toISOString().split('T')[0];
  
  const hasErrors = Object.values(errorMsgs).some(msg => msg !== '') || !props.date || !props.time || !props.guests || !props.occasion ? true : false;


  return (
    <>
    <section className='bookForm'>
      <Container>
      <h2>Booking Form</h2>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group controlId="date" className='pb-4'>
            <Form.Label>Choose date <i aria-hidden="true" class="calendar icon"></i>
</Form.Label>
            <Form.Control aria-label="Date selector" data-testid="dateSelect" type="date" name="date" min={today} value={props.date} onChange={props.handleInputChange} />
            <Form.Control.Feedback aria-label="Date error" type="invalid">{errorMsgs.date}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="time" className='pb-4'>
            <Form.Label>Choose time <i aria-hidden="true" class="clock icon"></i></Form.Label>
            <Form.Control aria-label="Time selector" as="select" name="time" value={props.time} onChange={props.handleInputChange}>
            <option value="">Please select an option</option>
            {Array.isArray(props.availableBookingTimes) ? props.availableBookingTimes.map((item, index) => {
              return <option key={index}>{item}</option>
            }) : null}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="guests" className='pb-4'>
            <Form.Label>Number of guests <i aria-hidden="true" class="users icon"></i></Form.Label>
            <Form.Control aria-label="Number of guests selector" type="number" name="guests" isInvalid={props.guestsIsInValid} value={props.guests} onChange={props.handleInputChange} min={1} max={10} onBlur={validateField} />
            <Form.Control.Feedback type="invalid">{errorMsgs.guests}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="occasion" className='pb-4'>
            <Form.Label>Occasion </Form.Label>
            <Form.Control aria-label="Occasion selector" as="select" name="occasion" value={props.occasion} onChange={props.handleInputChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Form.Control>
          </Form.Group>
            <div className='text-end'>
            <Button variant="primary" type="submit" className="fullBtn" aria-label="Submit button" onClick={()=>setShowModal(true)} disabled={hasErrors}>
            Make Your reservation
          </Button>
            </div> 
        </Form>
      </Container>
      {showModal && <BookingConfirmation setShowModal={setShowModal} showModal={showModal} date={props.date} time={props.time} numGuests={props.guests} occasion={props.occasion}/>}
    </section>
        
    </>
  );
}

export default BookingForm;
