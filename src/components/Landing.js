import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Landing.css';

export default function Landing(props) {
  return (
    <div>
      <NavBar/>
      <div className="landing-body">
        <div className="hero-section">
          <h1>Goal Keeper</h1>
          <h4>An app to help you track your personal goals</h4>
        </div>
        <div className="landing-section">
          <h2>Section 1</h2>
          <p>[Screenshot placeholder]</p>
          <p>Section 1 text</p>
        </div>
        <div className="landing-section">
          <h2>Section 2</h2>
          <p>[Screenshot placeholder]</p>
          <p>Section 2 text</p>
        </div>
        <div className="landing-section">
          <h2>Section 3</h2>
          <p>[Screenshot placeholder]</p>
          <p>Section 3 text</p>
        </div>
      </div>
      <Footer />
    </div>

  );
}
