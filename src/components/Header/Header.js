import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header-wrapper">
      <h1>Project Management Board</h1>
      <nav className="Navigation-wrapper">
        <Link className="App-link" to="/">
          Home
        </Link>
        <Link className="App-link" to="/backlog">
          Backlog
        </Link>
      </nav>
    </div>
  );
}

export default Header;
