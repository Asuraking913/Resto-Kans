import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import OrderPage from './pages/order'
import Landing from './pages/landing'
import Dashboard from './pages/dashboard'
import Authenticate from './pages/authenticate'
import AuthContext, { AuthProvider } from './utils/provider'
import PrivateRoute from './utils/protectedRoutes'
import verifyToken from './utils/handleVerify'
// import SideBar from './components/primary-comp/sidebar'

function App() {

  const {setAdminUser, setIsAuthenticated, adminUser} = useContext(AuthContext)

  return (
    <AuthProvider>
      <div className=''>
        <Router>
            <Routes>
              <Route path={"/"} element = {<Landing />}/>
              <Route path={"/menu"} element = {<OrderPage />}/>
              <Route path={"/authenticate"} element={<Authenticate />}/>


              <Route element={<PrivateRoute />}>
                <Route path={"/dashboard"} element = {<Dashboard />}/>
              </Route>
            </Routes>
        </Router>
      </div>
    </AuthProvider>
  )
}

export default App