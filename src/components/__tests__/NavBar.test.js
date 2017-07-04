import React from 'react';
import { shallow, mount } from 'enzyme';

import { NavBar } from '../NavBar';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {
  toggleLogin,
  toggleSignUp,
  toggleGoalPane,
  logOut
} from '../../actions';

describe('NavBar', () => {

  it('should shallow render', () => {
    shallow(<NavBar />);
  })

  it('should render child components', () => {
    const wrapper = shallow (<NavBar />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Navbar.Header)).toHaveLength(1);
    expect(wrapper.find(Navbar.Brand)).toHaveLength(1);
    expect(wrapper.find(Navbar.Toggle)).toHaveLength(1);
    expect(wrapper.find('Link')).toHaveLength(1);
    expect(wrapper.find(Navbar.Collapse)).toHaveLength(1);
    expect(wrapper.find(Nav)).toHaveLength(1);
    expect(wrapper.find(NavItem)).toHaveLength(2);
  });

  // it('should dispatch on clicking Navbar.Brand link', () => {
  //   const dispatch = jest.fn();
  //   const wrapper = shallow(<NavBar dispatch={dispatch}/>);
  //   wrapper.find('Link').simulate('click');
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  // });

  it('should render correct NavItems at / path', () => {
    const wrapper = shallow(<NavBar />);
    //to store list of NavItem elements
    const navItems = wrapper.find(Nav).children().nodes;
    expect(navItems[0].props.children).toMatch('Login');
    expect(navItems[1].props.children).toMatch('Signup');
  });

  it('should dispatch on clicking NavItems on LandingPage', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <NavBar
        dispatch={dispatch}
        showLogin={false}
        showSignUp={false}
       />
    );
    wrapper.find('.left-navItem').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleLogin(true));
    wrapper.find('.right-navItem').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleSignUp(true));
  });

  it('should render correct NavItems at /home path', () => {
    // required to change window.location - usually read-only
    Object.defineProperty(window.location, 'pathname', {
      configurable: true,
      writable: true,
      value: '/home'
    });
    const wrapper = shallow(<NavBar />);
    const navItems = wrapper.find(Nav).children().nodes;
    expect(navItems[0].props.children).toMatch('Tasks');
    expect(navItems[1].props.children).toMatch('Goals');

    // return window.location to normal state
    Object.defineProperty(window.location, 'pathname', {
      writable: false,
      value: '/'
    });
  });

  it('should dispatch on clicking NavItems on HomePage', () => {
    // required to change window.location - usually read-only
    Object.defineProperty(window.location, 'pathname', {
      configurable: true,
      writable: true,
      value: '/home'
    });
    const dispatch = jest.fn();
    const simEvent = {
      preventDefault: jest.fn(),
      currentTarget: {
        getAttribute: jest.fn()
      }
    }
    const wrapper = shallow(
      <NavBar
        dispatch={dispatch}
        showGoalPane={false}
        history={[]}
      />);
    wrapper.find('.right-navItem').simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleGoalPane(true));

    wrapper.find('.left-navItem').simulate('click', simEvent);
    expect(dispatch).toHaveBeenCalledWith(toggleGoalPane(false));

    // return window.location to normal state
    Object.defineProperty(window.location, 'pathname', {
      writable: false,
      value: '/'
    });
  });
});
