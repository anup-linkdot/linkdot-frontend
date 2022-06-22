import { Api_routes, server_url } from "../config/API_Routes"
import { getRequest, postRequest } from "../config/axios-config"

const createBadge = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await postRequest(server_url + Api_routes.createBadge, body)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const getBadgeData = async (badge_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await getRequest(server_url + Api_routes.getBadge + '?badge_id=' + badge_id)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const issueBadge = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await postRequest(server_url + Api_routes.issueBadge, body)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const showAllBadge = async (badge_type) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await getRequest(server_url + Api_routes.showAllBadges + '?badge_type=' + badge_type)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

const claimBadge = async (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await postRequest(server_url + Api_routes.claimBadge, body)
            resolve(response)
        }
        catch (err) {
            console.error('err -- ', err)
            reject(err)
        }
    })
}

export { createBadge, getBadgeData, issueBadge, showAllBadge, claimBadge }