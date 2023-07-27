import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Router from './pages/router'

const App:React.FC = () => {
  return (
    <Routes>
        <Route path="/*" element={<Router />} />
    </Routes>
  );
}

export default App;
