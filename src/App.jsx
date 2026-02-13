import Dashboard from "./components/Dashboard";
import Services from "./components/Services";

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

  //call back function - function passed as a prop to child component and called in child component to pass data from child to parent
  const handleData = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>{title}</h1>
      <Dashboard
        title={dashboardTitle}
        purpose={dashboardPurpose}
        users={userList}
      />
      <Services passData={handleData} />
    </>
  );
};

export default App;
