import { useEffect, useReducer } from "react";
import { UserContext } from "./UserContext";
import { useUsersApi } from "../hooks/useUsersApi";

const initialState = {
  users: [],
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOAD_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id != action.payload),
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  const { fetchUsers, createUser, removeUser } = useUsersApi();

  const loadUsers = async () => {
    try {
      const users = await fetchUsers();
      dispatch({ type: "LOAD_USERS", payload: users });
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };

  const addUser = async (user) => {
    try {
      const newUser = await createUser(user);
      dispatch({ type: "ADD_USER", payload: newUser });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await removeUser(id);
      dispatch({ type: "DELETE_USER", payload: id });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
