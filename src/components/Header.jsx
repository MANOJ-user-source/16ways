// File: src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <div className="logo">16 Ways</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/catalogue">Catalogue</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

