/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { routes as allRoutes } from "./../../components/routes/Routes";
import { Link } from "react-router-dom";

function TopicWindow({ topic, pathname }) {
  const location = useLocation();
  const [routes, setRoutes] = useState([]);
  const [showTopWindow, setShowTopWindow] = useState(true);

  useEffect(() => {
    let filteredRoutes = allRoutes.filter((route) => route.name == topic);
    setRoutes(filteredRoutes);
  }, [topic]);

  useEffect(() => {
    setShowTopWindow(location.pathname == pathname);
  }, [location, pathname]);

  return (
    <div>
      {showTopWindow && (
        <div className="topic-window">
          <h1>{topic}</h1>
          {routes?.map((route, index) => (
            <div key={index}>
              {route.subroutes?.map((subroute, index) => (
                <div key={index}>
                  <Link to={subroute.path}>{subroute.name}</Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default TopicWindow;
