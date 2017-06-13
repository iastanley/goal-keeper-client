import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

//pass a prop that will determine the buttons displayed to the right

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    }

  handleLogin(event) {
    event.preventDefault();
    //dispatch action.login
    //this action should open the modal
  }

  handleSignUp(event) {
    event.preventDefault();
    //dispatch signup action
  }

  handleGoals(event) {
    event.preventDefault();
    //dispatch show goal action
  }

  handleHome(event) {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));

  }

  buildRightMenu() {
    if (this.props.rightMenu) {
      switch(this.props.rightMenu) {
        case 'show-login-signup':
          return (
            <Navbar.Collapse>
              <Nav pullRight>
              <NavItem
                onClick={this.handleLogin}
                >Login</NavItem>
              <NavItem
                onClick={this.handleSignUp}
                >Signup</NavItem>
              </Nav>
            </Navbar.Collapse>
          );
        case 'show-task-button':
          return (
            <Navbar.Collapse>
              <Nav pullRight>
              <NavItem
                onClick={this.handleHome}
                href="/home">Tasks</NavItem>
              <NavItem
                onClick={this.handleGoals}
                disabled>Goals</NavItem>
              </Nav>
            </Navbar.Collapse>
          );
        case 'show-goal-button':
          return (
            <Navbar.Collapse>
              <Nav pullRight>
              <NavItem
                onClick={this.handleHome}
                href="/home" disabled>Tasks</NavItem>
              <NavItem
                onClick={this.handleGoals}
                >Goals</NavItem>
              </Nav>
            </Navbar.Collapse>
          );
        default:
          return;
      }
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

//with router needed to access history object
export default withRouter(NavBar);
