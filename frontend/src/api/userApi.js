import axios from 'axios';

const API_URL = "http://localhost:8080/users";

// ✅ Fetch all users
export const getUsers = async () => {
    return await axios.get(API_URL);
};

// ✅ Fetch a user by ID
export const getUserById = async (id) => {
    return await axios.get(`${API_URL}/${id}`);
};

// ✅ Create a new user
export const createUser = async (user) => {
    return await axios.post(API_URL, user);
};

// ✅ Update an existing user
export const updateUser = async (id, user) => {
    return await axios.put(`${API_URL}/${id}`, user);
};

// ✅ Delete a user
export const deleteUser = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
