import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/add-user">Add User</Link>
        <Link to="/dashboard">Dashboard</Link>
        {/* <a href="/dashboard">Dashboard using context</a> */}
      </nav>
    </>
  );
};

export default Nav;
