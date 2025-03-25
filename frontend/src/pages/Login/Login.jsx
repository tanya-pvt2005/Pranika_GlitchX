import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Login;
