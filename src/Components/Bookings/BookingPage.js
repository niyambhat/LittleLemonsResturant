import React, { useState } from 'react';
import BookingForm from './BookingForm';
import { submitAPI } from '../../Api';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
function BookingPage({ date, handleDateChange, availableBookingTimes }) {
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [showModal, setShowModal] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'date':
                handleDateChange(value)
                break;
            case 'time':
                setTime(value);
                break;
            case 'guests':
                setGuests(parseInt(value));
                break;
            case 'occasion':
                setOccasion(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const res = submitAPI("form.data");
        if (res) {
            // alert('For submitted successfully');
            setShowModal(true)
        }
    }

    return (
        <div>
            <BookingForm
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
                handleSubmit={handleSubmit}
                handleInputChange={handleChange}
                availableBookingTimes={availableBookingTimes}
            />
            <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
         {showModal && 
         <Modal.Dialog>
         <Modal.Header closeButton>
         <Modal.Title>Modal title</Modal.Title>
         </Modal.Header>

         <Modal.Body>
         <p>Modal body text goes here.</p>
         </Modal.Body>

         <Modal.Footer>
         <Button variant="secondary" onClick={()=>setShowModal(false)}>Close</Button>
         </Modal.Footer>
     </Modal.Dialog>
         } 
    
    </div>
        </div>
    );
}

export default BookingPage;
