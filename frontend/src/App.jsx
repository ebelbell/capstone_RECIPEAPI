//imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <h1>Recipes&Allergens</h1>
      
      {/* ROUTER ------------------ PAGES & PATHS */}
      <Router>
        {/* NAVBAR Components*/}
        <Navbar />
        <Routes>
          {/* HOME Component */}
          <Route path='/' exact />
        </Routes>
      </Router>

    </>
  );
}

export default App;
