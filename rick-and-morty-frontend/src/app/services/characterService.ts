import axios from 'axios';


export const fetchFilterOptions = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/characters/filters`);
    return response.data;
  };
  
  export const fetchCharacters = async (params: Record<string, any>) => {
    const response = await axios.get('/api/characters', { params });
    return response.data;
  };