import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Badge from ".";
import { DataNotAvailable } from "../DataNotAvailable";
import BadgeCard from "./BadgeCard";

export const BadgeList = ({ badgeList, badgeDetailUrl }) => {
  console.log(badgeList);
  const navigate = useNavigate();
  if (!badgeList.length) return <DataNotAvailable />;

  const redirectToDetailPage = (badge_id) => {
    if (badgeDetailUrl) {
      navigate(`${badgeDetailUrl}/${badge_id}`);
    }
    return null;
  };

  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "20px", // figma design contains 40px
      }}
    >
      {badgeList.map((badge) => (
        <div style={{ marginBottom: "20px" }} key={badge._id}>
          <BadgeCard>
            <div
              style={{
                padding: "12px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div onClick={() => redirectToDetailPage(badge._id)}>
                <Badge
                  title={badge.name}
                  description={badge.description}
                  image={badge.image}
                  badge_type={badge.badge_type}
                  created_at={badge.created_at}
                />
              </div>

              <div
                style={{
                  margin: "15px 0px 6px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  columnGap: "12px",
                }}
              >
                <button
                  style={{
                    boxShadow: "black 4px 5px 0px -1px, 4px 5px #FFFFFF",
                    padding: "8px",
                    background: "#FFFFFF",
                    color: "black",
                    border: "2px solid #FFFFFF",
                  }}
                  onClick={() => redirectToDetailPage(badge._id)}
                >
                  <p style={{ fontSize: "1rem", fontWeight: 600 }}>Insight</p>
                </button>
                <button
                  style={{
                    boxShadow: "black 4px 5px 0px -1px, 4px 5px #FFFFFF",
                    padding: "6px",
                    background: "black",
                    color: "white",
                    border: "2px solid #FFFFFF",
                  }}
                  onClick={() => navigate("/badge/issue")}
                >
                  <p style={{ fontSize: "1rem", fontWeight: 600 }}>
                    Issue To User
                  </p>
                </button>
              </div>
            </div>
          </BadgeCard>
        </div>
      ))}
    </div>
  );
};

BadgeList.propTypes = {
  badgeList: PropTypes.array.isRequired,
  badgeDetailUrl: PropTypes.string,
};
