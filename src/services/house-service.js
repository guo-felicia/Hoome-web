import axios from 'axios';
//local
// const TUITS_API = 'http://localhost:4000/api/tuits';
//heroku
const HOUSE_API = 'https://hoome-webdev-node.herokuapp.com/api/results';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const HOUSE_API = `${API_BASE}/results`;


export const findAllResults = async () => {
    const response = await axios.get(HOUSE_API);
    const results = response.data;
    return results;
}

export const findResultById = async (result) => {
    const response = await axios
        .get(`${HOUSE_API}/${result._id}`);
    return response.data;
}
