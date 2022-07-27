import { useNavigate } from "react-router-dom";
import Badge from "../Badge";
import BadgeCard from "../Badge/BadgeCard";
import { BadgeDetail } from "../Badge/BadgeDetail";

export default function IssuedBadgeDetail() {
  return (
    <div className="main-dashboard-div">
      <div className="main-row">
        <div
          style={{
            paddingLeft: "60px",
          }}
        >
          <BackToDashbord />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <BadgeDetail />
            <div style={{ width: "35%" }}>
              <BadgeCard>
                <div
                  style={{
                    padding: "20px 80px",
                  }}
                >
                  <Badge />
                  <button
                    style={{
                      width: "100%",
                      marginTop: "15px",
                      boxShadow: "black 4px 5px 0px -1px, 4px 5px #FFFFFF",
                      padding: "12px",
                      background: "#FFFFFF",
                      color: "black",
                      border: "2px solid #FFFFFF",
                    }}
                  >
                    <p style={{ fontSize: "1rem", fontWeight: 600 }}>
                      Issue To User
                    </p>
                  </button>
                </div>
              </BadgeCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BackToDashbord = () => {
  const navigate = useNavigate();
  return (
    <p
      style={{
        color: "#8B8B8B",
        fontSize: "14px",
        lineHeight: "21px",
        fontWeight: 400,
        cursor: "pointer",
        marginBottom: "20px",
      }}
      onClick={() => navigate("/dashboard")}
    >
      Back To Dashboard
    </p>
  );
};
