import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import BookingPage from "../Bookings/BookingPage"
import { useReducer } from 'react';
import { fetchAPI } from '../../Api';

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { times: action.res };
    default:
      return state;
  }
}
function Reservations() {
  const initialState = {}
  const [state, dispatch] = useReducer(reducer, initialState);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
   initializeTimes()
  }, []);

  const handleDateChange = (value) => {
    setDate(value)
    const date = new Date(value);
    updateTimes(date)
  }

  const initializeTimes=()=>{
    const res = fetchAPI(new Date());
    dispatch({ type: "UPDATE_TIMES", res });
    return res
  }
  
  
  const updateTimes=(date)=>{
    const res = fetchAPI(date);
    dispatch({ type: "UPDATE_TIMES", res });
    return res;
  }

  return (
    <section><h1>Booking</h1>
      <Container>
        <BookingPage date={date} handleDateChange={handleDateChange} availableBookingTimes={state.times} />
      </Container>
    </section>
  );
}

export default Reservations;
