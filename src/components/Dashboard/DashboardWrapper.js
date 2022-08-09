import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/dashboard.styles.scss";
import Profile from "../../assets/images/profile.png";
import { getStorage } from "../../utils/auth-utils";
import { getUserDetails } from "../../services/user.service";
import { logoutUser, setUserData } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";
import DropDown from "./Dropdown";
import { NavBar } from "./NavBar";

// Modal.setAppElement('#yourAppElement');

const DashboardWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const address = useAddress();

  useEffect(() => {
    if (address) {
      getNewToken();
    }
  }, []);

  const getNewToken = async () => {
    const token = getStorage("token");
    if (token) {
      //call api to get user data
      const user_response = await getUserDetails();
      if (user_response.status === true) {
        console.log("", user_response.data);
        dispatch(setUserData(user_response.data));
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="dashboard-main-div">
      <div className="dashboard-template">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardWrapper;
