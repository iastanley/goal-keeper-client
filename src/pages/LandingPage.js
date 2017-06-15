import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import './LandingPage.css';

import {
  toggleLogin,
  toggleSignUp
} from '../actions';

//the landing-section divs could be components
//add a NavBar prop to control the right menu button

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.closeLogin = this.closeLogin.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
  }

  closeLogin() {
    // replace with action dispatch later
    this.props.dispatch(toggleLogin(false));
  }

  closeSignUp() {
    this.props.dispatch(toggleSignUp(false));
  }


  render() {
    return (
      <div className="landing-page">
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
            <Button
              bsSize="large" onClick={this.openSignUp}>
              Get Started!
            </Button>
          </div>
        </div>
        <LoginModal
          show={this.props.showLogin} close={this.closeLogin}/>
        <SignUpModal
          show={this.props.showSignUp} close={this.closeSignUp}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showLogin: state.navigation.showLogin,
  showSignUp: state.navigation.showSignUp
});

export default connect(mapStateToProps)(LandingPage);
