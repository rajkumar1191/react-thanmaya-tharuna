import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Nav = () => {

  const { isAuthenticated, logout, login } = useAuth();

  return (
    <>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/add-user">Add User</Link>
        <Link to="/dashboard">Dashboard</Link>
        {/* <a href="/dashboard">Dashboard using context</a> */}
        {!isAuthenticated && <button onClick={login}>Login</button>}
        {isAuthenticated && <button onClick={logout}>Logout</button>}
      </nav>
    </>
  );
};

export default Nav;
