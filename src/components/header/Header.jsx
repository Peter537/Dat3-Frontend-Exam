/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav className="header-row">
      <div className="header-element">
        <Link to="/">Home</Link>
      </div>
      <div className="header-divider">|</div>
      <div className="header-element">
        <Link to="/question">Questions</Link>
      </div>
    </nav>
  );
}

export default Header;
