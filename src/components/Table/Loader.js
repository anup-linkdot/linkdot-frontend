import BadgeLoad from "../../assets/images/badge-load.gif";

export const Loader = () => (
  <div className="badges-section loading-badge-section">
    <img
      alt=""
      src={BadgeLoad}
      style={{
        height: "20px",
        width: "20px",
      }}
    />
  </div>
);
