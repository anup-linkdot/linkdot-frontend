import moment from "moment";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import Badge from ".";
import BadgeCard from "./BadgeCard";

export const BadgeDetail = ({
  title,
  description,
  image,
  badge_type,
  created_at,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{}}>
          <p
            // TODO: change font family to `'PingFang TC'`
            className="gradient_text"
            style={{
              fontSize: "16px",
              lineHeight: "21px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            {badge_type}#{moment(created_at).format("MMMYYYY")}
          </p>
          <p
            style={{
              fontSize: "32px",
              lineHeight: "48px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "24px",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: 400,
              color: "#FFFFFF",
            }}
          >
            {description}
          </p>
        </div>
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
                {badge_type}
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
            {/* <div>
              <p
                style={{
                  color: "#8B8B8B",
                  fontSize: "14px",
                  lineHeight: "21px",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
              >
                BadgeNo
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
                {}
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
                Number of People Issued
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
            </div> */}
          </div>
        </div>
      </div>
      <div style={{ width: "35%" }}>
        <BadgeCard>
          <div
            style={{
              padding: "20px 35px",
            }}
          >
            <Badge
              image={image}
              title={title}
              description={description}
              badge_type={badge_type}
              created_at={created_at}
            />
            <button
              style={{
                width: "100%",
                marginTop: "15px",
                boxShadow: "black 4px 5px 0px -1px, 4px 5px #FFFFFF",
                padding: "8px",
                background: "#FFFFFF",
                color: "black",
                border: "2px solid #FFFFFF",
              }}
            >
              <p
                style={{ fontSize: "1rem", fontWeight: 600 }}
                onClick={() => navigate(`/badge/issue/${_id}`)}
              >
                Issue To User
              </p>
            </button>
          </div>
        </BadgeCard>
      </div>
    </div>
  );
};

BadgeDetail.prototype = {
  title: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
  image: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
};
