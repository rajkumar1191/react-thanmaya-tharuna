import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/home";
import AddUserByContext from "./components/AddUserByContext";
// import Dashboard from "./components/Dashboard";
import Nav from "./components/Navbar";
import DashboardUsingContext from "./components/DashboardUsingContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-user" element={<AddUserByContext />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardUsingContext />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
