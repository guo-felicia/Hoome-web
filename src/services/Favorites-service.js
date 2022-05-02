import axios from 'axios';
//local
const FAVORITES_API = 'http://localhost:4000/api/favorites';
//heroku
// const TUITS_API = 'https://full-stack-developer-server.herokuapp.com/api/tuits';

const API_BASE = process.env.REACT_APP_API_BASE;
// const QUESTION_API = `${API_BASE}/questions`;


export const findAllFavorites = async () => {
    const response = await axios.get(FAVORITES_API);
    const data = response.data;
    return data;
}

export const deleteFavorites = async (data) => {
    const response = await axios
        .delete(`${FAVORITES_API}/${data._id}`);
    return response.data;
}

export const addFavorites = async (data, username) => {
    data[0]['postedBy'] = username;
    const response = await axios.post(FAVORITES_API, data);
    return response.data;
}

export const findFavoritesByUser = async (username) => {
    const response =  await axios.get(`${FAVORITES_API}/${username}`)
    const data = response.data
    return data;
}

