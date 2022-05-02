import axios from 'axios';
//local
const QUESTION_API = 'http://localhost:4000/api/questions';
//heroku
// const TUITS_API = 'https://full-stack-developer-server.herokuapp.com/api/tuits';

const API_BASE = process.env.REACT_APP_API_BASE;
// const QUESTION_API = `${API_BASE}/questions`;


export const findAllQuestions = async () => {
    const response = await axios.get(QUESTION_API);
    const data = response.data;
    return data;
}

export const findQuestionByUser = async (username, firstName) => {
    const response =  await axios.get(`${QUESTION_API}/${username}/${firstName}`)
    const data = response.data
    return data;
}

export const deleteQuestion = async (data) => {
    const response = await axios
        .delete(`${QUESTION_API}/${data._id}`);
    return response.data;
}

export const createQuestion = async (data) => {
    const response = await axios.post(QUESTION_API, data);
    return response.data;
}


export const updateQuestion = async (tuit) => {
    const response = await axios
        .put(`${QUESTION_API}/${tuit._id}`, tuit);
    return response.data;
}
