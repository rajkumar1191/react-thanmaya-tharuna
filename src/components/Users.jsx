const Users = (props) => {

  const isUser = true;

  return (
    <div
      style={{
        border: isUser ? "1px solid black" : "1px solid red",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
        fontSize: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3>Name: {props.name}</h3>
      <h3>username: {props.username}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
      <h3>Website: {props.website}</h3>
    </div>
  );
};

export default Users;
