import React from 'react';
import LandingPage from './components/LandingPage/LandingPage/LandingPage';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import Create from './components/Create/Create'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/recipe" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
