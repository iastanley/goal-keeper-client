import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import Footer from '../components/Footer';
import './LandingPage.css';
import fullAppScreenshot from '../images/full-calendar-screenshot.png';
import mobileScreenshot from '../images/goalkeeper-iphone.png';
import goalScreenshot from '../images/goalprogress.png';

import {
  toggleLogin,
  toggleSignUp,
  makeSignUp,
  makeLogin,
  setUserError
} from '../actions';

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.closeLogin = this.closeLogin.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
    this.makeSignUp = this.makeSignUp.bind(this);
    this.makeLogin = this.makeLogin.bind(this);
    this.setUserError = this.setUserError.bind(this);
  }

  closeLogin() {
    // replace with action dispatch later
    this.props.dispatch(toggleLogin(false));
    this.props.dispatch(setUserError(null));
  }

  closeSignUp() {
    this.props.dispatch(toggleSignUp(false));
    this.props.dispatch(setUserError(null));
  }

  openSignUp() {
    this.props.dispatch(toggleSignUp(true));
  }

  makeSignUp(username, password) {
    this.props.dispatch(makeSignUp(username, password));
  }

  makeLogin(username, password) {
    this.props.dispatch(makeLogin(username, password));
  }

  setUserError(userError) {
    this.props.dispatch(setUserError(userError));
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <Redirect to="/home" />
      )
    }

    return (
      <div className="landing-page container-fluid">
        <div className="landing-body">
          <div className="hero-section row">
            <h1>GOAL KEEPER</h1>
            <h4>An app to help you track your personal goals</h4>
            <br/>
            <br/>
            <p>username: defaultUser</p>
            <p>password: pw</p>
          </div>
          <div className="landing-section row">
            <h2>Make Your Own Goals</h2>
            <div className="col-sm-12">
              <h4 className="tag-line">Successful people set goals and stick to them. Keep your goals in mind to increase productivity!</h4>
              <img className="landing-screenshot" src={fullAppScreenshot} alt="full-app-screenshot"/>
            </div>
          </div>
          <div className="landing-section row">
            <h2>Break Each Goal Into Tasks</h2>
            <div className="col-md-6">
              <p>Breaking down a problem into steps is the key to solving complex problems. Or perhaps you just need to schedule time to practice a skill. Either way, Goal Keeper helps you break down your goals into small tasks that you schedule. Use the calendar to identify gaps in your schedule where you can squeeze in another task.</p>
            </div>
            <div className="col-md-6">
              <img className="landing-screenshot-sm" src={mobileScreenshot} alt="mobile-screenshot"/>
            </div>
          </div>
          <div className="landing-section row">
            <h2>Track Your Progress</h2>
            <div className="col-md-6">
              <img className="landing-screenshot" src={goalScreenshot} alt="goal-screenshot"/>
            </div>
            <div className="col-md-6">
              <p>Positive feedback always feels good! Once you have set up tasks for a specific goal you can check off tasks as you complete them and see how close you are to completing your goal</p>
            </div>
          </div>
          <div className="landing-button row">
            <button
              className="btn btn-custom btn-lg"
              onClick={this.openSignUp}>
              Get Started!
            </button>
          </div>
          <div className="row">
            <Footer />
          </div>
        </div>
        <LoginModal
          show={this.props.showLogin} close={this.closeLogin}
          isLoading={this.props.isLoading}
          makeLogin={this.makeLogin}
          userError={this.props.userError}
          setUserError={this.setUserError}/>
        <SignUpModal
          show={this.props.showSignUp}
          close={this.closeSignUp}
          isLoading={this.props.isLoading}
          makeSignUp={this.makeSignUp}
          userError={this.props.userError}
          setUserError={this.setUserError}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  userError: state.user.userError,
  showLogin: state.navigation.showLogin,
  showSignUp: state.navigation.showSignUp,
  badCredentials: state.user.badCredentials,
  loggedIn: state.user.loggedIn,
  isLoading: state.user.isLoading
});

export default connect(mapStateToProps)(LandingPage);
