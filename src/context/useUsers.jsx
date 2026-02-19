import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUsers = () => useContext(UserContext);
