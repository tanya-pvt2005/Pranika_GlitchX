import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/">
        <button>Landing Page</button>
      </Link>
      <Link to="/prepregnancy-support">
        <button>Pre-Pregnancy Support</button>
      </Link>
      <Link to="/pregnancy-support">
        <button>Pregnancy Support</button>
      </Link>
      <Link to="/postpregnancy-support">
        <button>Post-Pregnancy Support</button>
      </Link>
      <Link to="/elderly-support">
        <button>Elderly Support</button>
      </Link>
      
    </>
  );
}

export default Dashboard;
