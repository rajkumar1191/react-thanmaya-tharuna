import axiosInstance  from "./axiosInstance";


//get, post, delete, put, patch

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    return response.data;
    } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const addUser = async (user) => {
  try {
    const response = await axiosInstance.post("/users", user);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export const updateUser = async (user) => {
  try {
    const response = await axiosInstance.put(`/users/${user.id}`, user);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
    try {
        const response = await axiosInstance.delete(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};