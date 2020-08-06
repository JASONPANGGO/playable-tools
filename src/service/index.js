import request from "../utils/request.js"

export function getPsd2ui(data) {
    return request({
        url: '/psd2ui',
        method: "post",
        params: data
    })
}

export function getVoodooPlayable(data) {
    return request({
        url: "/voodooPlayable",
        method: "get",
        params: {
            url: data
        },
        responseType: "blob"
    })
}

export function getVoodooEndcard(data) {
    return request({
        url: "/voodooEndcard",
        method: "get",
        params: {
            url: data
        },
        responseType: "blob"
    })
}