import axios from "axios"
const api = axios.create({
    baseURL: "http://186.236.164.239:81"
})

export default api