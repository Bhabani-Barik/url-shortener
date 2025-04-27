import { } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './component/LandingPage'
import AboutPage from './component/AboutPage'
import NavBar from './component/NavBar'
import Footer from './component/Footer.Jsx'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />}  />
        <Route path='/about' element={<AboutPage />}  />
      </Routes>
      <Footer />
     </BrowserRouter>    
    </>
  )
}

export default App
