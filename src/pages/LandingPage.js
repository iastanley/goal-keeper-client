import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
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
    this.openLogin = this.openLogin.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
    this.makeSignUp = this.makeSignUp.bind(this);
    this.makeLogin = this.makeLogin.bind(this);
    this.setUserError = this.setUserError.bind(this);
  }

  openLogin() {
    this.props.dispatch(toggleLogin(true));
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
    // Eventually switch to check for userIsLoading OR goalIsLoading
    if (this.props.userIsLoading) {
      return (
        <Redirect to="/home" />
      )
    }

    return (
      <div className="landing-page container-fluid">
        <div className="landing-body">
          <div className="hero-section row">
            <h1>GOAL KEEPER</h1>
            <h4>Track the progress of your personal goals</h4>
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
            <h2>To Get Started</h2>
            <div className="row">
              <div className="col-sm-4">
                <h3 className="step-number">1</h3>
                <p>Create a goal in the Goal Pane</p>
              </div>
              <div className="col-sm-4">
                <h3 className="step-number">2</h3>
                <p>Pick a date</p>
                <p>Add tasks to your goal</p>
              </div>
              <div className="col-sm-4">
                <h3 className="step-number">3</h3>
                <p>Check off completed tasks</p>
                <p>Track goal progress</p>
              </div>
            </div>
            <button
              className="btn btn-custom btn-lg"
              onClick={this.openSignUp}>
              Sign Up Now!
            </button>
            <button
              className="btn btn-custom btn-lg"
              onClick={this.openLogin}>
              Login
            </button>
          </div>
          <div className="row">
            <footer>
              <p>&copy; 2017 Illana Stanley</p>
              <p>Photo by Bruno Nascimento on Unsplash</p>
            </footer>
          </div>
        </div>
        <LoginModal
          show={this.props.showLogin} close={this.closeLogin}
          makeLogin={this.makeLogin}
          userError={this.props.userError}
          setUserError={this.setUserError}/>
        <SignUpModal
          show={this.props.showSignUp}
          close={this.closeSignUp}
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
  userIsLoading: state.user.isLoading
});

export default connect(mapStateToProps)(LandingPage);
