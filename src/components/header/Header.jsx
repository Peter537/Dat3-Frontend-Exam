/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./header.css";

function Header({ routes }) {
  return (
    <nav className="header-row">
      {routes.map((route, index) => (
        <div className="header-element" key={index}>
          <div>
            <Link to={route.path}>{route.name}</Link>
          </div>
          {routes.length - 1 !== index && (
            <div className="header-divider">|</div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Header;
