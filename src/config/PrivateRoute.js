import { useAddress } from "@thirdweb-dev/react";
import { ConnectComponent } from "../components/Auth/Connect";

const PrivateRoute = ({ children }) => {
  const address = useAddress();
  return address ? children : <ConnectComponent />;
};

export default PrivateRoute;
