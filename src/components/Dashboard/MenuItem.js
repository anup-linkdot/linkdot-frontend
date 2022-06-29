import { useNavigate } from "react-router-dom";

const MenuItem = ({ name, active, url }) => {
  const navigate = useNavigate();
  console.log(`${name}:${active}`);
  const boxShadow = active
    ? "-6px -6px 0px 0.01px #0D99FF"
    : "#0f1018 -6px -7px 0px -1px, -6px -7px #0D99FF";

  return (
    /**
     * TODO: use `<li>Link Name </li>` for navigation links
     * Helpful article: https://www.webfx.com/blog/web-design/20-html-best-practices-you-should-follow/#:~:text=sparingly%20and%20responsibly.-,11.%20Use%20an%20Unordered%20List%20(%3Cul%3E)%20for%20Navigation,-Navigation%20is%20a
     */
    <button
      className={
        active
          ? "metamask-btn creator-btn create-badge-btn-navbar dashboard-btn active-main-btn"
          : "metamask-btn creator-btn create-badge-btn-navbar dashboard-btn"
      }
      style={{
        boxShadow: boxShadow,
        backgroundColor: active ? "#0D99FF" : "transparent",
        border: "2px solid white",
        opacity: active ? "100%" : "50%",
      }}
      onClick={() => navigate(url)}
    >
      <p>{name}</p>
    </button>
  );
};
export default MenuItem;
