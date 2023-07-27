import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Contact from './contact';


const Router: React.FC = () => {
  return (
    <Routes>
        <Route path="/home" element={<Contact />} />
    </Routes>

  )
}

export default Router