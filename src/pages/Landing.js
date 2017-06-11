import React from 'react';
import { Button } from 'react-bootstrap';
import './Landing.css';

//the landing-section divs could be components

export default function Landing(props) {
  return (
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
      <div className="landing-button">
        <Button bsSize="large">Get Started!</Button>
      </div>
    </div>
  );
}
