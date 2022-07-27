import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Badge from ".";
import BadgeCard from "./BadgeCard";

export const BadgeList = ({ badgeList }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "20px", // figma design contains 40px
      }}
    >
      {badgeList.map((badge) => (
        <BadgeCard>
          <div
            style={{ padding: "12px", cursor: "pointer" }}
            onClick={() => navigate("/insights/badge-detail")}
          >
            <Badge />
          </div>
        </BadgeCard>
      ))}
    </div>
  );
};

BadgeList.propTypes = {
  badgeList: PropTypes.array.isRequired,
};
