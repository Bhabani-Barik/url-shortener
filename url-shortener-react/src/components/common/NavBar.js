import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">TinyLink</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
          <Link className="btn btn-success" to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
