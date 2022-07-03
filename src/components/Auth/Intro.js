import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { walletConnect } from "../../services/auth.service";
import { setStorage } from "../../utils/auth-utils";
import { useAddress, useChainId } from "@thirdweb-dev/react";
import Connect from "./Connect";

const Intro = () => {
  const navigate = useNavigate();
  const address = useAddress();

  const updateTokenInStorage = (access_token, refresh_token) => {
    setStorage("token", access_token);
    setStorage("refresh_token", refresh_token);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };
  const registerWallet = async (address) => {
    // Return the address of the wallet and set it on localstorage
    setStorage("wallet_id", address);
    const body = {
      wallet_id: address,
      wallet_name: "Metamask", // TODO: need to make this dynamic
    };
    const response = await walletConnect(body);
    if (response.status === true) {
      if (response.data.access_token) {
        const { access_token, refresh_token } = response.data;
        updateTokenInStorage(access_token, refresh_token);
      } else navigate("/welcome");
    }
  };

  useEffect(() => {
    if (address) registerWallet(address);
  }, [address]);

  return <Connect />;
};

export default Intro;
