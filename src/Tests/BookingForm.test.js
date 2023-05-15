import { render, fireEvent, getByText } from '@testing-library/react';
import BookingForm from "../Components/Bookings/BookingForm";
import React from 'react';


describe('BookingForm', () => {
  const props = {
    handleDateChange: jest.fn(),
    availableBookingTimes: ['9:00am', '11:00am', '1:00pm'],
    handleSubmit: jest.fn(),
    errorMsgs: {},
    validateField: jest.fn(),
  };

  test('renders the form', () => {
    const Component = render(<BookingForm {...props} />);
  const chooseDateLabel = Component.getByText('Choose date');
  expect(chooseDateLabel).toBeInTheDocument();
  });

 
});
