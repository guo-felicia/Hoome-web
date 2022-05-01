import axios from "axios";
const API_URL = "http://localhost:4000/api"
const api = axios.create({withCredentials: true})

export const signup = async (email, username, password, role) => {
    const response = await api.post(`${API_URL}/signup`, {email, username, password, role})
    return response.data
}

export const signin = async (email, password) => {
    const response = await api.post(`${API_URL}/signin`,
        {email, password})
    return response.data
}

export const profile = async () => {
    const response = await api.post(`${API_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await api.post(`${API_URL}/logout`)
    return response.data
}

export const updateUserInfo = async (updatedUser) => {
    const response = await api.put(`${API_URL}/profile`, updatedUser)
    return response.data
}

export const addFollowing = async (username, following, identity) => {
    const response = await api.put(`${API_URL}/profile/${username}`, {following, identity})
    return response.data
}

// export const updateHouses = async (newHouse) => {
//     const response = await api.put(`${API_URL}/newhouse`, newHouse)
//     return response.data
// }

export const findUserByUsername = async (username) => {
    const response = await api.get(`${API_URL}/profile/${username}`)
    return response.data
}