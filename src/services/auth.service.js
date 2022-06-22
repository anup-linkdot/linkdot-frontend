import { Api_routes, server_url } from "../config/API_Routes"
import { getRequest, postRequest } from "../config/axios-config"

const walletConnect = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await postRequest(server_url + Api_routes.walletConnect, body)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const userType = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await postRequest(server_url + Api_routes.userType, body)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const saveUserName = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await postRequest(server_url + Api_routes.setUsername, body)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const saveEmail = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await postRequest(server_url + Api_routes.saveEmail, body)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const getToken = async (wallet_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await getRequest(server_url + Api_routes.getToken + '?wallet_id=' + wallet_id)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

export { walletConnect, userType, saveUserName, saveEmail, getToken }