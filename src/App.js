import React from 'react';
import LandingPage from './pages/LandingPage';
import {Routes, Route } from 'react-router-dom'

export default function App() {
  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
     </div>

  );
}
