import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUsers = () => useContext(UserContext);
