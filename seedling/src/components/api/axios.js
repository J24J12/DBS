import axios from "axios"

const get = async (endpoint, headers) => {
    const res = await axios.get(endpoint,
        {
            headers: headers
        })
    return res
}

const post = async (endpoint, body) => {
    const res = await axios.post(endpoint, 
        body, 
        {
            headers: {
                "Content-Type": "application/json"
            }
        })
    return res
}

const customAxios = axios.create()
   

export {get, post, customAxios}