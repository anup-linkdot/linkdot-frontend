import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBadgeData } from "../../services/badge.service";
import { BadgeDetail } from "../Badge/BadgeDetail";

// TODO: A claimed badge should not appear in the /badge/issued/{id} page.

export default function IssuedBadgeDetail() {
  const [badge, setBadge] = useState(null);
  const { id } = useParams();

  const getBadgeDetail = async (badgeId) => {
    try {
      const response = await getBadgeData(badgeId);
      console.log(response);
      setBadge({
        image: response.data.badge_img,
        ...response.data.data,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBadgeDetail(id);
  }, []);

  return (
    <div className="main-dashboard-div">
      <div className="main-row">
        <div
          style={{
            paddingLeft: "60px",
            width: "100%",
          }}
        >
          <BackToDashbord />
          {badge && (
            <BadgeDetail
              title={badge.name}
              description={badge.description}
              image={badge.image}
              badge_type={badge.badge_type}
              created_at={badge.created_at}
              _id={badge._id}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export const BackToDashbord = () => {
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
