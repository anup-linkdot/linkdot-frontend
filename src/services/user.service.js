import { Api_routes, server_url } from "../config/API_Routes"
import { getRequest, postRequest } from "../config/axios-config"

const getUserDetails = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await getRequest(server_url + Api_routes.getUser)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

export { getUserDetails }