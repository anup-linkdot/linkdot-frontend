import PropTypes from "prop-types";

const BadgeCard = ({ children }) => {
  return (
    <div className="white-border">
      <div className="badge-card">{children}</div>
    </div>
  );
};

export default BadgeCard;

BadgeCard.propTypes = {
  children: PropTypes.node.isRequired,
};
