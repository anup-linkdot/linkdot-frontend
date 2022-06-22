import { Navigate, Route } from "react-router-dom"
import { getStorage } from "../utils/auth-utils"

const LoginRoute = ({ children }) => {
    let token = getStorage("token")
    return token ? <Navigate to="/dashboard" /> : children
}

export default LoginRoute