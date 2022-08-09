import React, { useState } from "react";
import Loader from "../../assets/images/loader.gif";
import { useNavigate } from "react-router-dom";
import { getStorage, setStorage } from "../../utils/auth-utils";
import { getToken, saveEmail } from "../../services/auth.service";
import { AuthWrapper } from "./AuthWrapper";

const Email = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  // const []
  const [next_active, setNextActive] = useState(false);
  const [load, setLoad] = useState(false);

  const getEmail = (value) => {
    setEmail(value);
    if (
      value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setNextActive(true);
    } else {
      setNextActive(false);
    }
  };

  const saveUserEmail = async () => {
    const body = {
      wallet_id: getStorage("wallet_id"),
      email,
    };
    const response = await saveEmail(body);
    console.log("response -- ", response);
    if (response.status === true) {
      const Userresponse = await getToken(getStorage("wallet_id"));
      if (Userresponse.status === true) {
        console.log("response == ", Userresponse);
        setStorage("token", Userresponse.data.access_token);
        setStorage("refresh_token", Userresponse.data.refresh_token);
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        alert("Something went wrong. Try again!");
      }
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
          You Display name is <br />
          Utopian DIstropia
        </p>
      </div>
      <div
        style={{
          margin: "0px 40px",
        }}
        className="vertical-line category-line"
      ></div>
      <div>
        {load === true && (
          <div className="loader-div">
            <img className="loader-gif" src={Loader} />
          </div>
        )}
        <input
          className="username-input"
          placeholder="Enter your Email ID"
          type={"text"}
          onChange={(e) => getEmail(e.target.value)}
        />
        <div
          className={
            email.length === 0
              ? "not-active-under-text under-text-div"
              : "under-text-div"
          }
        >
          {email.length > 0 && (
            <p className="under-text">Enter your Email ID</p>
          )}
          <p
            className={
              next_active === false ? "next-btn" : "next-btn next-btn-active"
            }
            onClick={() => next_active === true && saveUserEmail()}
          >
            Next
          </p>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Email;
