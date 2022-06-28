import React from "react";
import Metamask from "../../assets/images/metamask.png";
import WalletConnect from "../../assets/images/walletconnect.png";
import { useNavigate } from "react-router-dom";
import { walletConnect } from "../../services/auth.service";
import { setStorage } from "../../utils/auth-utils";

const Intro = () => {
  const navigate = useNavigate();

  const connectMetaMask = () => {
    if (window.ethereum) {
      // Do something
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then(async (res) => {
          // Return the address of the wallet and set it on localstorage
          setStorage("wallet_id", res[0]);
          const body = {
            wallet_id: res[0],
            wallet_name: "Metamask",
          };
          const response = await walletConnect(body);
          console.log("response -- ", response);
          if (response.status === true) {
            if (response.data.access_token) {
              setStorage("token", response.data.access_token);
              setStorage("refresh_token", response.data.refresh_token);
              setTimeout(() => {
                navigate("/dashboard");
              }, 1000);
            } else {
              navigate("/welcome");
            }
          } else {
            alert("install metamask extension!!");
          }
        });
    } else {
      alert("install metamask extension!!");
    }
  };

  return (
    <div className="intro-community-div">
      <div className="intro-left-div">
        <p className="get-started-text">
          Get Start to Join our
          <br /> Community
        </p>
        <p className="signin-text">
          Quickly get started by signing in <br />
          using your existing accounts.
        </p>
        <p className="wallet-connect-text">
          By connecting your wallet, you agree to our
          <br />
          <span className="terms-text">Terms of Service</span> and&nbsp;
          <span className="policy-text">Privacy Policy</span>
        </p>
      </div>
      <div className="intro-right-div">
        <button
          className="metamask-btn"
          onClick={() => connectMetaMask()}
          style={{
            boxShadow: "#0f1018 5px 6px 0px -1px, 5px 6px #ffcd29",
          }}
        >
          <img src={Metamask} className="metamask-img" />
          <p>Metamask</p>
        </button>
        <button
          className="metamask-btn wallet-connect-bbtn"
          disabled
          style={{
            boxShadow: "#0f1018 5px 6px 0px -1px, 5px 6px #FF6767",
          }}
        >
          <img src={WalletConnect} className="metamask-img" />
          <p>Wallet Connect</p>
        </button>
        <p className="wallet-create-text">
          Don't have a wallet? <span>Create one here</span>
        </p>
      </div>
    </div>
  );
};

export default Intro;
