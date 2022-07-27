import Logo from "../../assets/images/logo.png";

const Badge = () => (
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
          Exhibited at UD 2022
        </span>
      </div>
      <div
        style={{
          height: "100px",
        }}
      ></div>
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
      <span className="badge_description">
        Exhibited at the 8-day art, tech and design festival Utopian dystopia
        2022 alongside 10 top artists from the country.
      </span>
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
