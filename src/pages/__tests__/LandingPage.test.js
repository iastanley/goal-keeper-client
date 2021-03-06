import React from 'react';
import { shallow, mount } from 'enzyme';

import { LandingPage } from '../LandingPage';
import {
  toggleLogin,
  toggleSignUp,
  makeSignUp,
  makeLogin,
  setUserError
} from '../../actions';

describe('LandingPage', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<LandingPage/>);
    expect(wrapper.hasClass('landing-page')).toBe(true);
  });

  it('should render children with props', () => {
    const wrapper = shallow(
      <LandingPage
        user="user"
        showLogin={false}
        showSignUp={false}
        userError="userError"
        userIsLoading={false}
      />);
    expect(wrapper.find('LoginModal')).toHaveLength(1);
    expect(wrapper.find('SignUpModal')).toHaveLength(1);

    const loginModal = wrapper.find('LoginModal');
    expect(loginModal.prop('show')).toEqual(false);
    expect(loginModal.prop('userError')).toEqual("userError");

    const signUpModal = wrapper.find('SignUpModal');
    expect(signUpModal.prop('show')).toEqual(false);
    expect(signUpModal.prop('userError')).toEqual('userError');

  });

  it('should call dispatch on button click', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <LandingPage
        dispatch={dispatch}
        showSignUp={false}
        showLogin={false}
      />);

    wrapper.find('.landing-btn-signup').simulate('click');
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(toggleSignUp(true));

    wrapper.find('.landing-btn-login').simulate('click');
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith(toggleLogin(true));
  });

  // only testing non-async actions
  it('should dispatch actions on calling methods', () => {
    const userError = 'bad login';

    const dispatch = jest.fn();
    const wrapper = shallow(<LandingPage dispatch={dispatch}/>);

    wrapper.instance().closeLogin();
    expect(dispatch).toHaveBeenCalledWith(toggleLogin(false));
    expect(dispatch).toHaveBeenCalledWith(setUserError(null));
    wrapper.instance().closeSignUp();
    expect(dispatch).toHaveBeenCalledWith(toggleSignUp(false));
    expect(dispatch).toHaveBeenCalledWith(setUserError(null));
    wrapper.instance().openSignUp();
    expect(dispatch).toHaveBeenCalledWith(toggleSignUp(true));
    wrapper.instance().setUserError(userError);
    expect(dispatch).toHaveBeenCalledWith(setUserError(userError));
  });

});
