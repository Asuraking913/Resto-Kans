import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OrderPage from './pages/order'
import Landing from './pages/landing'
import Dashboard from './pages/dashboard'
import Authenticate from './pages/authenticate'
// import SideBar from './components/primary-comp/sidebar'

function App() {
  return (
    <div className=''>
      <Router>
          <Routes>
            <Route path={"/"} element = {<Landing />}/> 
            <Route path={"/menu"} element = {<OrderPage />}/> 
            <Route path={"/dashboard"} element = {<Dashboard />}/> 
            <Route path={"/authenticate"} element={<Authenticate />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App