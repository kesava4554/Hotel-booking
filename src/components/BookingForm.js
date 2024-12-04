// src/components/BookingForm.js
import React, { useState } from 'react';
import { useBookHotel } from '../hooks/useBookHotel';
import useStore from '../store';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const selectedHotel = useStore((state) => state.selectedHotel);
  const { mutate: bookHotel } = useBookHotel();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingDetails = {
      hotelId: selectedHotel.id,
      name,
      date,
    };
    bookHotel(bookingDetails);
  };

  if (!selectedHotel) return <div>Please select a hotel to book.</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Booking for {selectedHotel.name}</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;