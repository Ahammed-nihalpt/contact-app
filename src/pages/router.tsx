import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Contact from './contact';


const Router: React.FC = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
        <Route path="/home" element={<Contact />} />
        </Route>
    </Routes>

  )
}

export default Router