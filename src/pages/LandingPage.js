import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import './LandingPage.css';

//the landing-section divs could be components
//add a NavBar prop to control the right menu button

class LandingPage extends Component {
  render() {
    return (
      <div className="modal-container">
        <NavBar rightMenu="show-login-signup"/>
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
      </div>
    );
  }
}

export default LandingPage;
