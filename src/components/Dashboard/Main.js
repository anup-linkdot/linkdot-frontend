import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/dashboard.styles.scss";
import SideBar from "./SideBar";

const Main = () => {
  return (
    <div className="main-dashboard-div">
      <div className="main-row">
        <div className="button-left-main">
          <SideBar />
        </div>
        <div className="main-section-div">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
