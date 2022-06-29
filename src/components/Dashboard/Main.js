import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/dashboard.styles.scss";
import MenuItem from "./MenuItem";

const Main = () => {
  const navLinks = [
    { name: "Dashboard", url: "/dashboard/nobadge", path: "/dashboard/" },
    { name: "Badge Insight", url: "/insights", path: "/insights/" },
  ];
  const currentPath = window.location.pathname;
  return (
    <div className="main-dashboard-div">
      <div className="main-row">
        <div className="button-left-main">
          {navLinks.map(({ name, url, path }) => (
            <MenuItem
              key={name}
              name={name}
              active={currentPath === { path }}
              url={url}
            />
          ))}
        </div>
        <div className="main-section-div">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
