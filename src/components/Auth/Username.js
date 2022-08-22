import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../assets/images/loader.gif";
import { getStorage } from "../../utils/auth-utils";
import { saveUserName } from "../../services/auth.service";
import { AuthWrapper } from "./AuthWrapper";

const Username = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [next_active, setNextActive] = useState(false);
  const [load, setLoad] = useState(false);

  const getUsername = (name) => {
    setUsername(name);
    setNextActive(false);
    console.log(username);
    if (name.length > 3) setNextActive(true);
  };

  const saveUserNameFunc = async () => {
    const body = {
      wallet_id: getStorage("wallet_id"),
      user_name: username,
    };
    const response = await saveUserName(body);
    console.log("response -- ", response);
    if (response.status === true) {
      navigate("/email");
    } else {
      alert("Something went wrong. Try again!");
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
          Selected yourself as an <br /> Organiser
        </p>
      </div>
      <div
        style={{
          margin: "0px 40px",
        }}
        className="vertical-line category-line"
      ></div>
      <div>
        <div>
          {load === true && (
            <div className="loader-div">
              <img className="loader-gif" src={Loader} />
            </div>
          )}
          <input
            style={{ width: "100%" }}
            className="username-input"
            placeholder="Enter your username"
            type={"text"}
            onChange={(e) =>
              getUsername(
                username.length > 0
                  ? e.target.value.substring(1, e.target.value.length)
                  : e.target.value
              )
            }
            value={username.length === 0 ? username : `@${username}`}
          />
          <div
            className={
              username.length === 0
                ? "not-active-under-text under-text-div"
                : "under-text-div"
            }
          >
            {username.length > 0 && (
              <p className="under-text">Enter your username</p>
            )}
            <p
              className={
                next_active === false ? "next-btn" : "next-btn next-btn-active"
              }
              onClick={() => next_active === true && saveUserNameFunc()}
            >
              Next
            </p>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Username;
