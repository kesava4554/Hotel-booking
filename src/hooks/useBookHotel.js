// src/hooks/useBookHotel.js
import { useMutation } from 'react-query';
import axios from '../axiosConfig';

export const useBookHotel = () => {
  return useMutation(async (bookingDetails) => {
    const { data } = await axios.post('/bookings', bookingDetails);
    return data;
  });
};