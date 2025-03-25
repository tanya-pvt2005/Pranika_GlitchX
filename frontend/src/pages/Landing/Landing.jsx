import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"

function Landing() {
  return (
    <>
      <Navbar/>
      <h1>Welcome to the Landing Page</h1>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/elderly-support">
        <button>Elderly Support</button>
      </Link>
    </>
  );
}

export default Landing;
