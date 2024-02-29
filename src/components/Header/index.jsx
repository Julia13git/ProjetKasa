import { Link } from "react-router-dom";
import "./header.scss";

function Header({ isAccueilActive, isAProposActive }) {
  return (
    <header>
      <img src="/images/logo.svg" alt="logo" className="kasa-logo" />
      <nav>
        <Link to="/" className={isAccueilActive ? "active" : null}>
          Accueil
        </Link>
        <Link to="/about" className={isAProposActive ? "active" : null}>
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
