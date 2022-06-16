import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './Components/common';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <h1>Welcome to React Router!</h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
