import React from 'react';
import { shallow, mount } from 'enzyme';

import SignUpModal from '../SignUpModal';

describe('SignUpModal', () => {
  it('should shallow render', () => {
    const wrapper = shallow(<SignUpModal />);
    expect(wrapper.hasClass('signup-modal')).toBe(true);
  });

  it('should update state on input change', () => {
    const wrapper = shallow(<SignUpModal/>);
    const simEventUser = {
      target: {
        value: 'testUser'
      }
    }
    const simEventPassword = {
      target: {
        value: 'testPassword'
      }
    }
    const simEventConfirm = {
      target: {
        value: 'confirmPassword'
      }
    }
    wrapper.find('.user-input').simulate('change', simEventUser);
    wrapper.find('.password-input').simulate('change', simEventPassword);
    wrapper.find('.confirm-input').simulate('change', simEventConfirm);

    expect(wrapper.state('username'))
      .toEqual(simEventUser.target.value);
    expect(wrapper.state('password'))
      .toEqual(simEventPassword.target.value);
    expect(wrapper.state('confirmPassword'))
      .toEqual(simEventConfirm.target.value);
  });

  it('should call makeSignUp with username and password', () => {
    const makeSignUp = jest.fn();
    const testUser = 'testUser';
    const testPassword = 'testPassword';
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <SignUpModal makeSignUp={makeSignUp}/>);
    wrapper.setState({
      username: testUser,
      password: testPassword,
      confirmPassword: testPassword
    });
    wrapper.find('.signup-btn').simulate('click', simEvent);
    expect(makeSignUp).toHaveBeenCalledTimes(1);
    expect(makeSignUp).toHaveBeenCalledWith(testUser, testPassword);
  });

  it('should show set error message on missing field', () => {
    const setUserError = jest.fn();
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <SignUpModal setUserError={setUserError} />
    );
    wrapper.setState({
      username: '',
      password: '',
      confirmPassword: ''
    });
    wrapper.find('.signup-btn').simulate('click', simEvent);
    expect(setUserError).toHaveBeenCalledTimes(1);
    expect(setUserError).toHaveBeenCalledWith('Missing Required Field.');
  });

  it('should set error if confirm password does not match', () => {
    const setUserError = jest.fn();
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <SignUpModal setUserError={setUserError} />
    );
    wrapper.setState({
      username: 'testUser',
      password: 'testPassword',
      confirmPassword: 'wrongPassword'
    });
    wrapper.find('.signup-btn').simulate('click', simEvent);
    expect(setUserError).toHaveBeenCalledTimes(1);
    expect(setUserError).toHaveBeenCalledWith('Confirmation Password Does Not Match.');
  });

  it('should call closeSignUp on Cancel button click', () => {
    const closeSignUp = jest.fn();
    const wrapper = shallow(
      <SignUpModal close={closeSignUp}/>
    );
    wrapper.find('.cancel-btn').simulate('click');
    expect(closeSignUp).toHaveBeenCalledTimes(1);
  });

});
