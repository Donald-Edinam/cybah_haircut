import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const Navigation = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
    </Router>
  )
}

export default Navigation