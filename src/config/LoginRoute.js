import { useAddress } from "@thirdweb-dev/react";
import { Navigate } from "react-router-dom";
import { getStorage } from "../utils/auth-utils";

const LoginRoute = ({ children }) => {
  const address = useAddress();
  let token = getStorage("token");

  return token && address ? <Navigate to="/dashboard" /> : children;
};

export default LoginRoute;
