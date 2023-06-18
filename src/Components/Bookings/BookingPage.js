import React, { useState } from 'react';
import BookingForm from './BookingForm';
import { submitAPI } from '../../Api';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import BookingConfirmation from './BookingConfirmation';
function BookingPage({ date, handleDateChange, availableBookingTimes }) {
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState();
    const [occasion, setOccasion] = useState('Birthday');
    const [showModal, setShowModal] = useState(false);
    const [errorMsgs, setErrorMsgs] = useState({
        date: '',
        time: '',
        guests: "Select more than 1",
        occasion: ''
    });
    const [guestsIsInValid, setGuestsIsInValid] = useState(false)
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




    const validateField = (e) => {
        let value = parseInt(e.target.value);
        let isInvalid = value < 2;
        setGuestsIsInValid(isInvalid);
        setErrorMsgs(prev => ({ ...prev, guests: isInvalid ? "Select 2 or more guests" : "" }));
    };

    return (
        <div >
            <BookingForm
                date={date}
                time={time}
                guests={guests}
                occasion={occasion}
                handleSubmit={handleSubmit}
                handleInputChange={handleChange}
                availableBookingTimes={availableBookingTimes}
                errorMsgs={errorMsgs}
                guestsIsInValid={guestsIsInValid}
                validateField={validateField}
                setShowModal={setShowModal}
                showModal={showModal}
            />
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
            </div>
        </div>
    );
}

export default BookingPage;
