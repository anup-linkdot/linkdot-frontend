import React from "react";
import PropTypes from "prop-types";
import "../../styles/dashboard.styles.scss";
import { useNavigate } from "react-router-dom";

const NoBadge = ({ userName }) => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100%" }}>
      <div className="no-badge-div">
        <p className="no-badge-text">
          Hey {userName}, you can create Non Tranferrable Badges to your
          contributors here
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
    </div>
  );
};

export default NoBadge;

NoBadge.propTypes = {
  userName: PropTypes.string.isRequired,
};
