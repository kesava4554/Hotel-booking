// src/store.js
import { create } from 'zustand';;

const useStore = create((set) => ({
  selectedHotel: null,
  bookingDetails: {},
  setSelectedHotel: (hotel) => set({ selectedHotel: hotel }),
  setBookingDetails: (details) => set({ bookingDetails: details }),
}));

export default useStore;