import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

//pass a prop that will determine the buttons displayed to the right

export default function NavBar(props) {

    return (
      <Navbar fixedTop fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Goal Keeper</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem href="#">Login</NavItem>
              <NavItem href="#">Signup</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
}
