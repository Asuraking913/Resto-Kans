import axios from "axios";

const Axios = axios.create({
    
})

// Axios.interceptors.request.use(config => {
//     // config.headers.Authorization = "Bearer: token", 

//     (error) => {
//         if(error.response.status === 401) {
//             localStorage.clear()
//             Promise.reject(error)
//         }
//     }
// })

export default Axios