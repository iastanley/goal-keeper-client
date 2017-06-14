import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import './LandingPage.css';

//the landing-section divs could be components
//add a NavBar prop to control the right menu button

class LandingPage extends Component {
  constructor(props) {
    super(props);

    // NEED TO MOVE TO REDUX STORE
    this.state = {
      showLogin: false,
      showSignUp: false
    }

    this.openLogin = this.openLogin.bind(this);
    this.closeLogin = this.closeLogin.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
  }

  openLogin() {
    // replace with action dispatch later
    this.setState({
      showLogin: true
    })
  }

  closeLogin() {
    // replace with action dispatch later
    this.setState({
      showLogin: false
    })
  }

  openSignUp() {
    this.setState({
      showSignUp: true
    })
  }

  closeSignUp() {
    this.setState({
      showSignUp: false
    })
  }


  render() {
    return (
      <div className="landing-page">
        {/*<NavBar
        openLink={
          { openLogin: this.openLogin,
            openSignUp: this.openSignUp }
        }
        rightMenu="show-login-signup"/>*/}
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
          show={this.state.showLogin} close={this.closeLogin}/>
        <SignUpModal
          show={this.state.showSignUp} close={this.closeSignUp}/>
      </div>
    );
  }
}

export default LandingPage;
