import { } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import AboutPage from './component/AboutPage'
import NavBar from './component/NavBar'
import Footer from './component/Footer.Jsx'
import RegisterPage from './component/RegisterPage'
import { Toaster } from 'react-hot-toast'
import LoginPage from './component/LoginPage.Jsx'
import DashboardLayout from './Dashboard/DashboardLayout'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Toaster position='bottom-center' />
     <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}  />
        <Route path='/about' element={<AboutPage />}  />
        <Route path='/register' element={<RegisterPage />}  />
        <Route path='/login' element={<LoginPage />}  />
        <Route path="/dashboard" element={<DashboardLayout />} />
      </Routes>
      <Footer />
     </BrowserRouter>    
    </>
  )
}

export default App
