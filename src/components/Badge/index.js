import PropTypes from "prop-types";

import Logo from "../../assets/images/logo.png";

const Badge = ({ title, description, image }) => (
  <div className="badge_detail">
    <div style={{ padding: "12px" }}>
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
      <div>
        <img alt="" style={{ height: "150px" }} width={"100%"} src={image} />
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
        <span className="gradient_text">Participation#JUL2022</span>
      </div>
      <span className="badge_description">{description} </span>
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        <img alt="" height={10} src={Logo} />
      </div>
    </div>
  </div>
);

export default Badge;

Badge.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
  image: PropTypes.string.isRequired,
};
