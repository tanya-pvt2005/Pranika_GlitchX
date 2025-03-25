import { Link } from "react-router-dom";

function Preg() {
  return (
    <div>
      <h1>Pregnancy Support Page</h1>
      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default Preg;
