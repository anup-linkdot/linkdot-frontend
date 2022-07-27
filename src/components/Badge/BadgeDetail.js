export const BadgeDetail = () => (
  <div
    style={{
      width: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <p
      // TODO: change font family to `'PingFang TC'`
      className="gradient_text"
      style={{
        fontSize: "16px",
        lineHeight: "21px",
        fontWeight: 600,
      }}
    >
      Participation#JUL2022
    </p>
    <p
      style={{
        fontSize: "32px",
        lineHeight: "48px",
        fontWeight: 700,
        color: "#FFFFFF",
      }}
    >
      Exhibited at UD 2022
    </p>
    <p
      style={{
        fontSize: "20px",
        lineHeight: "30px",
        fontWeight: 400,
        color: "#FFFFFF",
      }}
    >
      Exhibited at the 8-day art, tech and design festival Utopian dystopia
      <br />
      2022 alongside 10 top artists from the country.
    </p>
    <div style={{ marginTop: "40px", width: "80%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              color: "#8B8B8B",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Category
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            Participation
          </p>
        </div>
        <div>
          <p
            style={{
              color: "#8B8B8B",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Project
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            Polygon
          </p>
        </div>
      </div>
      {/* Bottom div */}
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              color: "#8B8B8B",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Category
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            Participation
          </p>
        </div>
        <div>
          <p
            style={{
              color: "#8B8B8B",
              fontSize: "14px",
              lineHeight: "21px",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Project
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: 500,
              color: "#FFFFFF",
            }}
          >
            Polygon
          </p>
        </div>
      </div>
    </div>
  </div>
);
