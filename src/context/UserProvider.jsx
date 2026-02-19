import { useReducer } from "react";
import { UserContext } from "./UserContext";

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

  const addUser = (user) => {
    console.log(user);
    dispatch({ type: "ADD_USER", payload: user });
  };

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

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
