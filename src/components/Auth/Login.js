import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/auth.styles.scss";
import Logo from "../../assets/images/logo.png";
import { AuthWrapper } from "./AuthWrapper";

const Login = () => (
  <div className="login-main-div">
    <div style={{ height: "100%" }}>
      <Outlet />
    </div>
    <div className="linkdot-logo-div">
      <img alt="" src={Logo} />
    </div>
  </div>
);

export default Login;
