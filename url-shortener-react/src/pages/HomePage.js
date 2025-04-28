import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/common/NavBar';
import Footer from '../components/common/Footer';

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand  fw-bold fs-3" to="/">TinyLink</Link>
          <div>
            <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
            <Link className="btn btn-success" to="/signup">Sign Up</Link>
          </div>
        </div>
      </nav> */}

      <Navbar />

      {/* Hero Section */}
      <header className="bg-light py-5">
        <div className="container text-center">
          <h1 className="display-4">Simplify Your Links</h1>
          <p className="lead">Shorten long URLs and share them anywhere with ease.</p>
          <Link to="/register" className="btn btn-success btn-lg">Get Started</Link>
        </div>
      </header>

      {/* Features */}
      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h4>Fast & Easy</h4>
            <p>Just paste your link, and we’ll handle the rest.</p>
          </div>
          <div className="col-md-4">
            <h4>Track Clicks</h4>
            <p>See how many people clicked your links.</p>
          </div>
          <div className="col-md-4">
            <h4>Safe & Secure</h4>
            <p>Your data is protected and private.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-dark text-white text-center py-3 fixed-bottom ">
        <div className="container">
          <small>&copy; {new Date().getFullYear()} URL Shortener App. All rights reserved.</small>
        </div>
      </footer> */}
      
      <Footer />
    </div>
  );
};

export default HomePage;
