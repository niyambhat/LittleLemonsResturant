import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../Components/Bookings/BookingForm';
import { prettyDOM } from '@testing-library/react';

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

  test('invalid form state', () => {
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
    
        const today = new Date();
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        const nextDayString = nextDay.toISOString().split('T')[0];
        
        // Set valid form values (one day after today's date)
        fireEvent.change(screen.getByTestId('dateSelect'), { target: { value: nextDayString } });
        fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '10:00' } });
        fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '1' } });
        fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });
        fireEvent.click(screen.getByRole('button', { name: 'Make Your reservation' }));
        expect(screen.getByRole('button')).toBeDisabled();
      });

      test('submits the form with valid data', () => {
        const setShowModalMock = jest.fn();
        const { container } = render(<BookingForm
          handleDateChange={jest.fn()}
          availableBookingTimes={['10:00', '11:00', '12:00']}
          handleSubmit={jest.fn()}
          errorMsgs={{}}
          validateField={jest.fn()}
          setShowModal={setShowModalMock}
          showModal={false}
          date="2023-06-19"
          time="10:00"
          guests="4"
          occasion="Birthday"
        />);
        
        // Create today's date
        const today = new Date();
        // Add one day to today's date
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        // Get the date string in the format 'YYYY-MM-DD'
        const nextDayString = nextDay.toISOString().split('T')[0];
        
       // Access the rendered elements using `screen`
  const dateSelectInput = screen.getByTestId('dateSelect');
  const chooseTimeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');

  // Set valid form values (one day after today's date)
  fireEvent.change(dateSelectInput, { target: { value: nextDayString } });
  fireEvent.change(chooseTimeSelect, { target: { value: '10:00' } });
  fireEvent.change(guestsInput, { target: { value: '4' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
        
        // Submit the form
        fireEvent.click(screen.getByRole('button', { name: 'Make Your reservation' }));
        
        // Print the formatted DOM output
        console.log(prettyDOM(container));
        expect(screen.getByRole('button')).not.toBeDisabled();
  });
});
