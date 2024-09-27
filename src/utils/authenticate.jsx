import { useContext } from 'react'
import Axios from '../utils/Axios'
import AuthContext from './provider'

const handleSumbit = async (e, onError, onLogin, data, onLoading) => {

    e.preventDefault()
    if(data.password !== data.password1) {
        onError("You passwords do not match")
        return
    }
    
    onLoading(true)
    const response = await Axios.post("/api/auth/create/user/", data).then(response => {
      // console.log(response, 'event')
      if(response.status == 201) {
        onLogin(t => !t)
        onLoading(false)
      }
    }).catch((error) => {
      
      if(error) {
        // onError(error.response.data.email)
        console.log(error)
        onLoading(false)
      }
    })
  }

  export const handleLogin = async (data) => {

    data.e.preventDefault() 
    data.onLoading(true)

    try{
      const response = await Axios.post("/api/auth/login/user/", data.data)
      console.log(response.data)
      if (response.status == 200) {
        data.onResult(true)
        localStorage.setItem('access', response.data.access)
        data.onAdmin(response.data.is_admin)
      }
    }
    catch(error) {
          console.log(error)
          data.onError('Invalid credentials')
          data.onLoading(false)
    }  
  }

  export default handleSumbit