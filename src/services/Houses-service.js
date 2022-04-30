import axios from 'axios';
const BASE_API = 'http://localhost:4000/api';

export const createHouses = async (data) => {
    const response = await axios.post(`${BASE_API}/newhouse`, data);
    return response.data;
}