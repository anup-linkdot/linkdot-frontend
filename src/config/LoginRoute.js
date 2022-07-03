import { useAddress } from "@thirdweb-dev/react";
import { Navigate } from "react-router-dom";

const LoginRoute = ({ children }) => {
  const address = useAddress();
  return address ? <Navigate to="/dashboard" /> : children;
};

export default LoginRoute;
