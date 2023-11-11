import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter

import Features from './components/Features'
import Profile from './components/Profile'
import Login from './components/Login'
import SignUp from './components/SignUp'
import RealtimeTest from './components/RealtimeTest'
import UserFlow from './components/UserFlow'

const App = () => {
  return (
    <Router> {/* Wrap your Routes with BrowserRouter */}
      <>
        <Routes>
          <Route path="/" element={ /* Remove the extra <div> here */
            <>
              <Navbar />
              <Home />
              <About />
              <UserFlow/>
              <Footer />
            </>
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/features/:detectionOption/test" element={<RealtimeTest/>}/>
        </Routes>
      </>
    </Router>
  )
}

export default App
