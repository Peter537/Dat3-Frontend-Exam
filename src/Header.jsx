/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./header.css";

function Header({ routes }) {
  return (
    <nav className="header-row">
      {routes.map((route, index) => (
        <div key={index}>
          <Link to={route.path}>{route.name}</Link>
        </div>
      ))}
    </nav>
  );
}

export default Header;
