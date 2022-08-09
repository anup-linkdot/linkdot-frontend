import React from "react";
import { useNavigate } from "react-router-dom";
import { userType } from "../../services/auth.service";
import { getStorage } from "../../utils/auth-utils";
import { AuthWrapper } from "./AuthWrapper";

const Category = () => {
  const navigate = useNavigate();

  const setCategory = async (category) => {
    const body = {
      wallet_id: getStorage("wallet_id"),
      user_type: category,
    };
    const response = await userType(body);
    console.log("response -- ", response);
    if (response.status === true) {
      navigate("/username");
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    <AuthWrapper>
      <div>
        <p className="get-started-text complete-reg-text">
          Complete your <br />
          Registration
        </p>
        <p className="wallet-connect-text category-select-text">
          select your category
        </p>
      </div>
      <div
        style={{
          margin: "0px 40px",
        }}
        className="vertical-line category-line"
      ></div>
      <div>
        <button
          className="metamask-btn creator-btn"
          onClick={() => setCategory("NFT_Artist")}
          style={{
            boxShadow: `#0f1018 5px 6px 0px -1px, 5px 6px #20AAFE`,
            fontSize: "1rem",
          }}
        >
          <p>NFT Artist</p>
        </button>
        <button
          className="metamask-btn organiser-btn"
          onClick={() => setCategory("Web3_Influencer")}
          style={{
            boxShadow: `#0f1018 5px 6px 0px -1px, 5px 6px #C640F2`,
            fontSize: "1rem",
          }}
        >
          <p>Web3 Influencer</p>
        </button>
        <button
          className="metamask-btn organiser-btn"
          onClick={() => setCategory("DAO_Community")}
          style={{
            boxShadow: `#0f1018 5px 6px 0px -1px, 5px 6px #20FE79`,
            fontSize: "1rem",
          }}
        >
          <p>DAO or Community</p>
        </button>
        <button
          className="metamask-btn organiser-btn"
          onClick={() => setCategory("Contributor")}
          style={{
            boxShadow: `#0f1018 5px 6px 0px -1px, 5px 6px #405CF2`,
            fontSize: "1rem",
          }}
        >
          <p>Contributor</p>
        </button>
      </div>
    </AuthWrapper>
  );
};

export default Category;
