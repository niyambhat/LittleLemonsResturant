import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

function BookingForm(props) {
  const { handleDateChange, availableBookingTimes, handleSubmit } = props;

  return (
    <section>
      <Container>
        <Form onSubmit={props.handleSubmit}>
          <Form.Group controlId="date">
            <Form.Label>Choose date</Form.Label>
            <Form.Control type="date" name="date" value={props.date} onChange={props.handleInputChange} />
          </Form.Group>
          <Form.Group controlId="time">
            <Form.Label>Choose time</Form.Label>
            <Form.Control as="select" name="time" value={props.time} onChange={props.handleInputChange}>
              {props.availableBookingTimes?.map((item, index) => {
                return <option>{item}</option>
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="guests">
            <Form.Label>Number of guests</Form.Label>
            <Form.Control type="number" name="guests" value={props.guests} onChange={props.handleInputChange} min={1} max={10} />
          </Form.Group>
          <Form.Group controlId="occasion">
            <Form.Label>Occasion</Form.Label>
            <Form.Control as="select" name="occasion" value={props.occasion} onChange={props.handleInputChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Make Your reservation
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default BookingForm;
