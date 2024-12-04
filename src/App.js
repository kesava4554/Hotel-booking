// src/App.js
import React from 'react';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Hotel Booking App</h1>
        <HotelList />
        <BookingForm />
      </div>
    </QueryClientProvider>
  );
};

export default App;