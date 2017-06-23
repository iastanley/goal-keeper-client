import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LoginModal from '../components/LoginModal';
import SignUpModal from '../components/SignUpModal';
import './LandingPage.css';

import {
  toggleLogin,
  toggleSignUp,
  makeSignUp,
  makeLogin
} from '../actions';

//the landing-section divs could be components
//add a NavBar prop to control the right menu button

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.closeLogin = this.closeLogin.bind(this);
    this.closeSignUp = this.closeSignUp.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
    this.makeSignUp = this.makeSignUp.bind(this);
    this.makeLogin = this.makeLogin.bind(this);
  }

  closeLogin() {
    // replace with action dispatch later
    this.props.dispatch(toggleLogin(false));
  }

  closeSignUp() {
    this.props.dispatch(toggleSignUp(false));
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
            <h1>Goal Keeper</h1>
            <h4>An app to help you track your personal goals</h4>
            <br/>
            <br/>
            <p>username: defaultUser</p>
            <p>password: pw</p>
          </div>
          <div className="landing-section row">
            <h2>Make Your Own Goals</h2>
            <div className="col-sm-12">
              <h4 className="tag-line">Successful people set goals and stick to them. Keeping your goals in mind to increase productivity!</h4>
            </div>
          </div>
          <div className="landing-section row">
            <h2>Break Each Goal Into Tasks</h2>
            <div className="col-md-6 text-left">
              <p>Breaking down a problem into steps is the key to solving complex problems. Or perhaps you just need to schedule time to practice a skill. Either way, Goal Keeper helps you break down your goals into small tasks that you schedule. Use the calendar to identify gaps in your schedule where you can squeeze in another task.</p>
            </div>
            <div className="col-md-6">
              <p>[Screenshot placeholder]</p>
            </div>
          </div>
          <div className="landing-section row">
            <h2>Track Your Progress</h2>
            <div className="col-md-6">
              <p>[Screenshot placeholder]</p>
            </div>
            <div className="col-md-6 text-left">
              <p>Positive feedback always feels good! Once you have set up tasks for a specific goal you can check off tasks as you complete them and see how close you are to completing your goal</p>
            </div>
          </div>
          <div className="landing-button">
            <Button
              bsSize="large" onClick={this.openSignUp}>
              Get Started!
            </Button>
          </div>
        </div>
        <LoginModal
          show={this.props.showLogin} close={this.closeLogin}
          makeLogin={this.makeLogin}/>
        <SignUpModal
          show={this.props.showSignUp}
          close={this.closeSignUp}
          makeSignUp={this.makeSignUp}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  showLogin: state.navigation.showLogin,
  showSignUp: state.navigation.showSignUp,
  badCredentials: state.user.badCredentials,
  loggedIn: state.user.loggedIn
});

export default connect(mapStateToProps)(LandingPage);
