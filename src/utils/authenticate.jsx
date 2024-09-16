import Axios from '../utils/Axios'


const handleSumbit = async (e, onError, onLogin, data, onLoading) => {
    e.preventDefault()
    
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

  export default handleSumbit