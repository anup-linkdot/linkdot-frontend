import { useMetamask, useWalletConnect } from "@thirdweb-dev/react";
import Metamask from "../../assets/images/metamask.png";
import WalletConnect from "../../assets/images/walletconnect.png";
import "../../styles/auth.styles.scss";
import Logo from "../../assets/images/logo.png";

const Connect = () => {
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
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
          onClick={() => connectWithMetamask()}
          style={{
            boxShadow: "#0f1018 5px 6px 0px -1px, 5px 6px #ffcd29",
          }}
        >
          <img src={Metamask} className="metamask-img" />
          <p>Metamask</p>
        </button>
        <button
          className="metamask-btn wallet-connect-bbtn"
          onClick={() => connectWithWalletConnect()}
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

export default Connect;
