import { useState } from "react";

const AddUser = ({ userData }) => {
  // useState -> store the data in component; data can mutable; [currentValue, updateFunction]
  // props -> data can't be changed
  // useReducer

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", name, username, email, phone, website);
    userData({ id: Date.now(), name, username, email, phone, website });
    setEmail("");
    setPhone("");
    setName("");
    setUserName("");
    setWebsite("");
  };

  return (
    <>
      <h4>Add User Form</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          User Name:
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          phone:
          <input
            type="text"
            name="phone"
            value={phone}
            placeholder="Enter phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            value={website}
            placeholder="Enter Website"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUser;
