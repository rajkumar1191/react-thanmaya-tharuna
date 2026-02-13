import Users from "./Users";
import "./Dashboard.css";

const Dashboard = ({ title, purpose, users }) => {
  // const { title, purpose } = props;
  // console.log(props);
  const isUser = true;
  return (
    <>
      <h1>{title}</h1>
      <h4>{purpose}</h4>
      <div className={ isUser ? "user-container" : "not-a-user" }>
        {users.length > 0 && users.map((user) => (
          <Users
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        ))}

        {users.length === 0 && <h2>No users found</h2>}
      </div>
    </>
  );
};

export default Dashboard;
