import { useAddress } from "@thirdweb-dev/react";
import { Navigate, Route } from "react-router-dom";
import { getStorage } from "../utils/auth-utils";

const LoginRoute = ({ children }) => {
  const address = useAddress();
  return address ? <Navigate to="/dashboard" /> : children;
};

export default LoginRoute;
