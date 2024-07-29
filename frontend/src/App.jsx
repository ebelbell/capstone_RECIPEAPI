import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeForm from './components/RecipeForm';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/recipe/new" element={< RecipeForm />} />
          <Route path="/recipe/:id/edit" element={< RecipeForm />} />
          <Route path="/contact/:id" element={< Contact />} />
          <Route path="/about" element={< About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
