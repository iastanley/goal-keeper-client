import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavBar.css';

import {
  toggleLogin,
  toggleSignUp,
  toggleGoalPane,
  logOut
} from '../actions';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleHome = this.handleHome.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
    this.openGoalPane = this.openGoalPane.bind(this);
    this.closeGoalPane = this.closeGoalPane.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    }

  openLogin() {
    // replace with action dispatch later
    this.props.dispatch(toggleLogin(true));
  }

  openSignUp() {
    this.props.dispatch(toggleSignUp(true));
  }

  openGoalPane() {
    this.props.dispatch(toggleGoalPane(true));
  }

  closeGoalPane() {
    this.props.dispatch(toggleGoalPane(false));
  }

  handleLogOut() {
    if (localStorage.userToken) {
      delete localStorage.userToken;
    }
    this.props.dispatch(toggleGoalPane(false));
    this.props.dispatch(logOut());
  }

  handleHome(event) {
    event.preventDefault();
    this.closeGoalPane();
    this.props.history.push(event.currentTarget.getAttribute('href'));

  }

  buildRightMenu() {
    switch(window.location.pathname) {
      case '/':
        return (
          <Navbar.Collapse>
            <Nav pullRight>
            <NavItem
              className="left-navItem"
              onClick={this.openLogin}
              >Login</NavItem>
            <NavItem
              className="right-navItem"
              onClick={this.openSignUp}
              >Signup</NavItem>
            </Nav>
          </Navbar.Collapse>
        );
      case '/home':
        return (
          <Navbar.Collapse>
            <Nav pullRight>
            <NavItem
              className="left-navItem"
              onClick={this.handleHome}
              href="/home"
              disabled={!this.props.showGoalPane}>Tasks</NavItem>
            <NavItem
              className="right-navItem"
              onClick={this.openGoalPane}
              disabled={this.props.showGoalPane}
              >Goals</NavItem>
            </Nav>
          </Navbar.Collapse>
        );
      default:
        return;
    }

  }

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link onClick={this.handleLogOut} to="/">
                <strong>GOAL KEEPER</strong>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          {this.buildRightMenu()}
        </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  showLogin: state.navigation.showLogin,
  showSignUp: state.navigation.showSignUp,
  showGoalPane: state.navigation.showGoalPane
});

//with router needed to access history object
export default withRouter(connect(mapStateToProps)(NavBar));
