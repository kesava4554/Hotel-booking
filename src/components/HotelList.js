// src/components/HotelList.js
import React from 'react';
import { useHotels } from '../hooks/useHotels';

const HotelList = () => {
  const { data: hotels, error, isLoading } = useHotels();

  if (isLoading) {
    return <div>Loading hotels...</div>;
  }

  if (error) {
    return <div>Error loading hotels. Please try again later.</div>;
  }

  return (
    <div>
      <h1>Available Hotels</h1>
      {hotels.length === 0 ? (
        <p>No hotels available.</p>
      ) : (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id}>{hotel.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HotelList;