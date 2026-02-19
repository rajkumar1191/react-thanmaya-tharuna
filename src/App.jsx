import { useState } from "react";
import AddUser from "./components/AddUser";
import Dashboard from "./components/Dashboard";
import Services from "./components/Services";
import AddUserByReducer from "./components/AddUserByReducer";
import AddUserByReducerRef from "./components/AddUserByReducerRef";
import AddUserByContext from "./components/AddUserByContext";
import DashboardUsingContext from "./components/DashboardUsingContext";

const App = () => {
  const title = "React tutorial";
  const dashboardPurpose = "show user list";
  const dashboardTitle = "dashboard";

  const userList = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
  ];

  const [users, setUsers] = useState(userList);

  //call back function - function passed as a prop to child component and called in child component to pass data from child to parent
  const handleData = (data) => {
    console.log(data);
  };

  const handleUserData = (user) => {
    console.log(user);
    // userList.push(user);
    setUsers((prev) => [...prev, user]); //([1,2,3,4,5])=>[1,2,3,4,5, 6]
    console.log(users);
  };

  return (
    <>
      <h1>{title}</h1>
      <AddUserByContext />

      <DashboardUsingContext />

      <AddUser userData={handleUserData} />
      <AddUserByReducer userData={handleUserData} />
      <AddUserByReducerRef userData={handleUserData} />
      <Dashboard
        title={dashboardTitle}
        purpose={dashboardPurpose}
        users={users}
      />
      <Services passData={handleData} />
    </>
  );
};

export default App;
