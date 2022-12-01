import React from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import {Routes, Route } from 'react-router-dom'
import { RegisterMentee } from './pages/RegisterMentee';
import {RegisterMentor} from './pages/RegisterMentor';

export default function App() {
  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registerMentee" element={<RegisterMentee/>}/>
        <Route path="/registerMentor" element={<RegisterMentor/>}/>
      </Routes>
     </div>

  );
}
