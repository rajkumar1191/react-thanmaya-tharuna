import { useState, useCallback } from "react";
import { getUsers, addUser, deleteUser } from "../api/userService";

export const useUsersApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const users = await getUsers();
      return users;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const createUser = useCallback(async (user) => {
    setLoading(true);
    setError(null);
    try {
      const newUser = await addUser(user);
      return newUser;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeUser = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUser(id);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    fetchUsers,
    createUser,
    removeUser,
  };
};
