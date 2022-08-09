import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import Logo from "../../assets/images/logo.png";

const Badge = ({ title, description, image, badge_type, created_at }) => {
  return (
    <div className="badge_detail">
      <div
        style={{
          padding: "12px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div className="badge_title">
          <span
            style={{
              fontWeight: 700,
              fontSize: "17px",
              lineHeight: "26px",
              color: "white",
            }}
          >
            {title}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            className="mask mask-hexagon"
            style={{ height: "150px" }}
            width={"150px"}
            src={image}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "30px",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <span className="gradient_text">
            {badge_type}#{moment(created_at).format("MMMYYYY")}
          </span>
        </div>
        <span
          style={{ height: "40px", overflow: "hidden" }}
          className="badge_description"
        >
          {description}
        </span>
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img alt="" style={{ height: "10px" }} src={Logo} />
        </div>
      </div>
    </div>
  );
};

export default Badge;

Badge.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
  image: PropTypes.string.isRequired,
  badge_type: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};
