import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsersApi = () => axios.get(API_URL);

export const createUserApi = (user) => axios.post(API_URL, user);

export const deleteUserApi = (id) => axios.delete(`${API_URL}/${id}`);