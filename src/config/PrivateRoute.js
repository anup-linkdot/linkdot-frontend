import { useAddress } from "@thirdweb-dev/react";
import Connect from "../components/Auth/Connect";

const PrivateRoute = ({ children }) => {
  const address = useAddress();
  return address ? children : <Connect />;
};

export default PrivateRoute;
