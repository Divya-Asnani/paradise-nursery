import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <div className="landing-divider"></div>
        <div className="landing-bottom">
          <p className="tagline">Where Green Meets Serenity</p>
          <Link to="/plants">
            <button className="get-started-btn">Get Started</button>
          </Link>
        </div>
        <AboutUs />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
