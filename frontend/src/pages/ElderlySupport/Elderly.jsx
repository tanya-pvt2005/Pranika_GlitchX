import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"

function Elderly() {
  return (
    <>
      <Navbar/>
      <h1>Elderly Support Page</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
      <Link to="/dashboard">
        <button>Back to dashboard</button>
      </Link>
    </>
  );
}

export default Elderly;
