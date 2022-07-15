import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/dashboard.styles.scss";
import Profile from "../../assets/images/profile.png";
import Settings from "../../assets/images/Settings.png";
import Logo from "../../assets/images/logo.png";
import { getStorage, setStorage } from "../../utils/auth-utils";
import { getToken } from "../../services/auth.service";
import { getUserDetails } from "../../services/user.service";
import { logoutUser, setUserData } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import DropDown from "./Dropdown";

// Modal.setAppElement('#yourAppElement');

const DashboardWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userReducer = useSelector((state) => state.userReducer);
  const disconnect = useDisconnect();
  const address = useAddress();

  useEffect(() => {
    if (address) {
      getNewToken();
    }
  }, []);

  const getNewToken = async () => {
    const token = getStorage("token");
    console.log("token -- ", token);
    if (token) {
      //call api to get user data
      const user_response = await getUserDetails();
      if (user_response.status === true) {
        console.log("", user_response.data);
        dispatch(setUserData(user_response.data));
        setTimeout(() => {
          navigate("/dashboard/nobadge");
        }, 1000);
      }
    } else {
      navigate("/");
    }
  };

  const logoutUserNav = () => {
    dispatch(logoutUser());
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("wallet_id");
    disconnect();
  };

  return (
    <div className="dashboard-main-div">
      <div className="dashboard-template">
        <div className="navbar-main">
          <div
            className="navbar-left-div"
            onClick={() => navigate("/dashboard/nobadge")}
          >
            <img src={Profile} alt="" />
            <p className="profile-name">{userReducer.user?.user_name}</p>
          </div>
          <div className="navbar-right-div">
            <button
              className="metamask-btn creator-btn create-badge-btn-navbar"
              onClick={() => navigate("/create/badge")}
              style={{
                boxShadow: "#0f1018 4px 5px 0px -1px, 4px 5px #FFFFFF",
                border: "none",
                fontSize: "1rem",
                lineHeight: "1.5rem",
              }}
            >
              <p>Create Badge</p>
            </button>
            <DropDown disconnect={disconnect} />
          </div>
        </div>
        <Outlet />
      </div>
      <img alt="" className="linkdot-logo" src={Logo} />
    </div>
  );
};

export default DashboardWrapper;
