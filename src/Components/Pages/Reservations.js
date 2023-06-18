import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import BookingPage from "../Bookings/BookingPage"
import { useReducer } from 'react';
import { fetchAPI } from '../../Api';
import CustomersSay from '../Layout/CustomersSay';
import owner from "../../Assets/owner.png"

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
    <>
     <section className='bookBg'>
      <Container>
        <BookingPage date={date} handleDateChange={handleDateChange} availableBookingTimes={state.times} />
      </Container>
    </section>
    <section className="aboutSection">
         <div className='sm-conatiner'>
         <div className="sideImage">
         <img src={owner} alt="restaurant" width="400" />
       </div>
         <div className="aboutText">
         <h1>About</h1>
         <p>Little Lemon Restaurant is a charming culinary haven that captivates diners with its delightful ambiance and exquisite flavors. Nestled in the heart of a bustling city, this hidden gem offers a unique fusion of traditional and modern cuisine, crafted with utmost precision and creativity. </p>
       </div> 
       </div> 
     </section>

     <section>
       <CustomersSay/>
     </section>
    </>
   
    
  );
}

export default Reservations;
