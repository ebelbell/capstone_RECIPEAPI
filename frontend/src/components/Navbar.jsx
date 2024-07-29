import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <nav className="Navbar">
            <div className="navbar-container">
                {/* utilize react-router. The link will contain Navbar paths */}
                <Link to="/" className="navbar-logo">Home</Link>
                <Link to="/recipe" className="navbar-logo">Recipes</Link>
                <Link to="/about" className="navbar-logo">About</Link>
                <Link to="/contact" className="navbar-logo">Contact</Link>

            </div>
        </nav>
    </>
  )
}

export default Navbar;