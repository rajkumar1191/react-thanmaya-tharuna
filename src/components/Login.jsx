import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

    const handleLogin = () => {
        // Perform login logic here (e.g., authentication)
        // After successful login, navigate to the dashboard
        login();
        navigate("/dashboard");

        // fetch("https://jsonplaceholder.typicode.com/posts")
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data);
        //     login();
        //     navigate("/dashboard");
        //   })
        //   .catch((error) => {
        //     console.error("Error fetching data:", error);
        //   });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;