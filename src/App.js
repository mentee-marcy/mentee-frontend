import React from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import {Routes, Route } from 'react-router-dom'

export default function App() {
  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
     </div>

  );
}
