import { Navigate, Route } from "react-router-dom"
import { getStorage } from "../utils/auth-utils"

const PrivateRoute = ({ children }) => {
    let token = getStorage("token")
    return token ? children : <Navigate to="/" />
}

export default PrivateRoute