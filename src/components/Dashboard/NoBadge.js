import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../../styles/dashboard.styles.scss";
import { useDispatch, useSelector } from "react-redux";

const NoBadge = () => {
  const navigate = useNavigate();
  const userReducer = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log("userReducer -- ", userReducer);
    if (
      userReducer.user?.badges_earned.length > 0 ||
      userReducer.user?.badges_issued.length > 0
    ) {
      navigate("/dashboard/badge");
    }
  }, []);

  return (
    <div className="no-badge-div">
      <p className="no-badge-text">
        {" "}
        Hey {userReducer.user.user_name}, you can create Non Tranferrable Badges
        to your contributors here
      </p>
      <button
        className="metamask-btn creator-btn create-badge-btn-navbar dashboard-btn main-pg-button"
        onClick={() => navigate("/create/badge")}
        style={{
          boxShadow: "#0f1018 5px 6px 0px -1px, 5px 6px #ffcd29",
        }}
      >
        <p>Create Badge</p>
      </button>
    </div>
  );
};

export default NoBadge;
