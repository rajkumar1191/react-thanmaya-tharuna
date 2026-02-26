import Users from "./Users";
import "./Dashboard.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, deleteUser } from "../store/users/userSlice";

const DashboardUsingRedux = () => {
  const dispatchRedux = useDispatch();
  const users = useSelector((state) => state.users.users);
  // const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatchRedux(fetchUsers());
  }, [dispatchRedux]);

  console.log(users);
  const isUser = true;

  const userList = users;
  // const [userList, setUserList] = useState(users);
  // const [search, setSearchKey] = useState("");

  // useEffect(() => {
  //   setUserList(users);
  // }, [users]);

  // const handleSearch = (e) => {
  //   console.log(e);
  //   setSearchKey(e.target.value);
  //   if (e.target.value != "") {
  //     setUserList((prev) =>
  //       prev.filter((user) =>
  //         user.name.toLowerCase().includes(e.target.value.toLowerCase()),
  //       ),
  //     );
  //   } else {
  //     setUserList(users);
  //   }
  // };

  const handleDelete = (id) => {
    dispatchRedux(deleteUser(id));
  };

  return (
    <>
      <h1>Dashboard</h1>
      <h4>purpose</h4>
      {/* <input
        type="text"
        name="search"
        value={search}
        placeholder="enter name"
        onChange={handleSearch}
      /> */}
      <div className={isUser ? "user-container" : "not-a-user"}>
        {userList.length > 0 &&
          userList.map((user) => (
            <Users
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              phone={user.phone}
              website={user.website}
              id={user.id}
              onDelete={handleDelete}
            />
          ))}

        {userList.length === 0 && <h2>No users found</h2>}
      </div>
    </>
  );
};

export default React.memo(DashboardUsingRedux);
