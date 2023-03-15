import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
