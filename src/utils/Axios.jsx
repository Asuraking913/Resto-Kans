import axios from "axios";

const Axios = axios.create({
    
})

Axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('access')

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},

    (error) => {
        if(error.response.status === 401) {
            localStorage.clear()
            Promise.reject(error)
        }
    }
)

Axios.interceptors.response.use((response) => {
    return response


}, 
    (error) => {
        let originalRequest = error.config;
        if(error.response.status == 401 && !originalRequest._retry) {
            localStorage.clear()
            return Axios(originalRequest)
        }
    }
)
    
export default Axios