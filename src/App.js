import React from 'react';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import {Routes, Route } from 'react-router-dom'
import { RegisterMentee } from './pages/RegisterMentee';
import {RegisterMentor} from './pages/RegisterMentor';
import { FriendsPage } from './pages/FriendsPage';
import Message from './pages/Message';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile'
import Videochat from './pages/Videochat'
import ConnectProfile from './pages/connectProfile'

export default function App() {
  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registerMentee" element={<RegisterMentee/>}/>
        <Route path="/registerMentor" element={<RegisterMentor/>}/>
        <Route path="/friendsPage" element={<FriendsPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/message" element={<Message/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/connectProfile' element={<ConnectProfile/>}/>
        <Route path="/videochat" element={<Videochat/>}/>
      </Routes>
     </div>

  );
}
