import { Link } from "react-router-dom";

function PrePreg() {
  return (
    <div>
      <h1>Pre-Pregnancy Support Page</h1>
      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
}

export default PrePreg;
