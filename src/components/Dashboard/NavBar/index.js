import { useDisconnect } from "@thirdweb-dev/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DropDown from "../Dropdown";

const NavBar = () => {
  const navigate = useNavigate();
  const disconnect = useDisconnect();
  const userReducer = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const logoutUser = () => {
    // dispatch(logoutUser());
    // localStorage.removeItem("token");
    // localStorage.removeItem("refresh_token");
    // localStorage.removeItem("wallet_id");
    disconnect();
  };
  return (
    <div className="navbar-main">
      <div className="navbar-left-div" onClick={() => navigate("/dashboard")}>
        <div
          style={{
            height: "37px",
            width: "40px",
            backgroundImage: "linear-gradient(to right, #C93DF2, #4DAAE9)",
          }}
          className="mask mask-hexagon-2"
        ></div>
        <p className="profile-name">{userReducer.user?.user_name}</p>
      </div>
      <div className="navbar-right-div">
        <button
          className="metamask-btn creator-btn create-badge-btn-navbar"
          onClick={() => navigate("/create/badge")}
          style={{
            boxShadow: "#0f1018 4px 5px 0px -1px, 4px 5px #FFFFFF",
            border: "none",
            fontSize: "1rem",
            lineHeight: "1.5rem",
          }}
        >
          <p>Create Badge</p>
        </button>
        <DropDown disconnect={logoutUser} />
      </div>
    </div>
  );
};

export { NavBar };
