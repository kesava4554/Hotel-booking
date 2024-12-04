import { useQuery } from 'react-query';
import axios from '../axiosConfig'; 

export const useHotels = () => {
  return useQuery('hotels', async () => {
    try {
      const { data } = await axios.get('/hotels'); 
      console.log('Fetched Hotels:', data);  // Add logging to check the fetched data
      return data;
    } catch (error) {
      console.error('Error fetching hotels:', error);  // Log any error during the fetch
      throw error;
    }
  });
};
