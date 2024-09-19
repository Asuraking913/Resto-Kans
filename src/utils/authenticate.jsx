import Axios from '../utils/Axios'


const handleSumbit = async (e, onError, onLogin, data, onLoading) => {
    e.preventDefault()
    if(data.password !== data.password1) {
        onError("You passwords do not match")
        return
    }
    
    onLoading(true)
    const response = await Axios.post("/api/create/user/", data).then(response => {
      console.log(response, 'event')
      if(response.status == 201) {
        onLogin(t => !t)
        onLoading(false)
      }
    }).catch((error) => {
      
      if(error) {
        onError(error.response.data.email)
        onLoading(false)
      }
    })
  }

  export const handleLogin = async (data) => {
    data.e.preventDefault() 

    data.onLoading(true)
    const response = await Axios.post("/api/token/", data.data).then(response => {
      console.log(response.data)
      if(response.status == 201) {
        // onLogin(t => !t)
        // onLoading(false)
      }
    }).catch((error) => {
      
      if(error) {
        // onError(error.response.data.email)
        console.log(error)
        data.onLoading(false)
      }
    })
    
  }

  export default handleSumbit