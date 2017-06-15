import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  toggleLogin,
  toggleSignUp
} from '../actions';

//pass a prop that will determine the buttons displayed to the right

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleHome = this.handleHome.bind(this);
    this.openLogin = this.openLogin.bind(this);
    this.openSignUp = this.openSignUp.bind(this);
    }

  openLogin() {
    // replace with action dispatch later
    this.props.dispatch(toggleLogin(true));
  }

  openSignUp() {
    this.props.dispatch(toggleSignUp(true));
  }

  handleHome(event) {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));

  }

  buildRightMenu() {

    switch(window.location.pathname) {
      case '/':
        return (
          <Navbar.Collapse>
            <Nav pullRight>
            <NavItem
              onClick={this.openLogin}
              >Login</NavItem>
            <NavItem
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
              onClick={this.handleHome}
              href="/home" disabled>Tasks</NavItem>
            <NavItem
              onClick={this.handleHome}
              href="home/goals"
              >Goals</NavItem>
            </Nav>
          </Navbar.Collapse>
        );
      case '/home/goals':
        return (
          <Navbar.Collapse>
            <Nav pullRight>
            <NavItem
              onClick={this.handleHome}
              href="/home">Tasks</NavItem>
            <NavItem
              onClick={this.handleHome}
              href="/home/goals"
              disabled>Goals</NavItem>
            </Nav>
          </Navbar.Collapse>
        );
      default:
        return;
    }

  }

  render() {
    return (
      <Navbar fixedTop fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Goal Keeper</Link>
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
  showSignUp: state.navigation.showSignUp
});

//with router needed to access history object
export default withRouter(connect(mapStateToProps)(NavBar));
