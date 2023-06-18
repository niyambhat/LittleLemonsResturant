import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../Components/Bookings/BookingForm';

describe('BookingForm', () => {
  test('renders the form', () => {
    render(<BookingForm
      handleDateChange={jest.fn()}
      availableBookingTimes={['10:00', '11:00', '12:00']}
      handleSubmit={jest.fn()}
      errorMsgs={{}}
      validateField={jest.fn()}
      setShowModal={jest.fn()}
      showModal={false}
    />);
    
    // Check if the form elements are rendered
    expect(screen.getByLabelText('Choose date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Make Your reservation' })).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    const setShowModalMock = jest.fn();
    render(<BookingForm
      handleDateChange={jest.fn()}
      availableBookingTimes={['10:00', '11:00', '12:00']}
      handleSubmit={jest.fn()}
      errorMsgs={{}}
      validateField={jest.fn()}
      setShowModal={setShowModalMock}
      showModal={false}
    />);
    
    // Create today's date
    const today = new Date();
    // Add one day to today's date
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 1);
    // Get the date string in the format 'YYYY-MM-DD'
    const nextDayString = nextDay.toISOString().split('T')[0];
    
    // Set valid form values (one day after today's date)
    fireEvent.change(screen.getByTestId('dateSelect'), { target: { value: nextDayString } });
    fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '10:00' } });
    fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: 'Make Your reservation' }));
    expect(setShowModalMock).toHaveBeenCalledTimes(1);

  });
});
