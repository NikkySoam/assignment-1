import { Link } from 'react-router-dom';
import '../style/landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Welcome to Task Manager</h1>
      <div className="landing-links">
        <Link to="/login" className="landing-link login">Login</Link>
        <Link to="/register" className="landing-link register">Register</Link>
      </div>
    </div>
  );
}

export default Landing