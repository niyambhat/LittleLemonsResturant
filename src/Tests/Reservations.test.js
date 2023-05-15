import { render, fireEvent, getByText } from '@testing-library/react';
import Reservations from '../Components/Pages/Reservations';
import React from 'react';
import { fetchAPI } from '../Api';

jest.mock('../Api');

describe('Reservations', () => {
  test('initializes times on mount', async () => {
    const res = ['10:00', '11:00', '12:00'];
    fetchAPI.mockResolvedValue(res);
    const component = render(<Reservations />);
    expect(fetchAPI).toHaveBeenCalled()
  });

  test('update time', async () => {
    const res = ['10:00', '11:00', '12:00'];
    fetchAPI.mockResolvedValue(res);
    const component = render(<Reservations />);
    expect(fetchAPI).toHaveBeenCalled()
  });

  test('updateTimes dispatches updateTimes with fetched data', async () => {
    const res = ['10:00', '11:00', '12:00'];
    fetchAPI.mockResolvedValue(res);
    const component = render(<Reservations />);
    const dateSelect = component.getByTestId("dateSelect");
    expect(dateSelect).toBeInTheDocument();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    fireEvent.change(dateSelect, { target: { value: tomorrow.toISOString().slice(0, 10) } });
    expect(fetchAPI).toHaveBeenCalled()
  });
  
});