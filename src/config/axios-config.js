import axios from "axios"
import { getStorage, setStorage } from "../utils/auth-utils"
import { Api_routes, server_url } from "./API_Routes"

const postRequest = async (url, data) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                'Authorization': getStorage('token'),
                "Content-Type": "application/json" 
            }
        }).then((response) => {
            console.log(response.status)
            resolve(response?.data)
        }).catch(async (error) => {
            // console.log(error.response)
            console.log(error.response.status)
            // console.log(response.status)
            if (error.response.status === 401) {
                const data = await getNewToken(getStorage('refresh_token'))
                postRequest(url)
            }
            resolve(error.response.data)
        })
    })
}

const getRequest = async (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: {
                'Authorization': getStorage('token'),
                "Content-Type": "text/plain"
            }
        }).then((response) => {
            resolve(response?.data)
        }).catch(async (error) => {
            console.log(error.response)
            console.log(error.response.status)
            if (error.response.status === 401) {
                const data = await getNewToken(getStorage('refresh_token'))
                getRequest(url)
            }
            else
                reject(error.response.data)
        })

    })
}

const getNewToken = async (refresh_token) => {
    const url = server_url + Api_routes.refreshToken
    return new Promise((resolve, reject) => {
        axios.post(url, {
            refresh_token : refresh_token
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async (response) => {
            await setStorage('token', response.data.data.access_token)
            resolve(response?.data)
        }).catch(async (error) => {
            reject(error.response.data)
        })
    })
}

export { postRequest, getRequest }