import React from 'react';
import { shallow, mount } from 'enzyme';

import LoginModal from '../LoginModal';

describe('LoginModal', ()=>{
  it('should render', () => {
    const wrapper = shallow(<LoginModal/>);
    expect(wrapper.hasClass('login-modal')).toBe(true);
  });

  it('should update username on input change', () => {
    const wrapper = shallow(<LoginModal/>);
    const simEvent = {
      target: {
        value: 'testUser'
      }
    }
    wrapper.find('input[placeholder="Username"]').simulate('change', simEvent);
    expect(wrapper.state('username')).toEqual(simEvent.target.value);
  });

  it('should update password on input change', () => {
    const wrapper = shallow(<LoginModal/>);
    const simEvent = {
      target: {
        value: 'testPassword'
      }
    }
    wrapper.find('input[placeholder="Password"]').simulate('change', simEvent);
    expect(wrapper.state('password')).toEqual(simEvent.target.value);
  });

  it('should call makeLogin with username and password', () => {
    const makeLogin = jest.fn();
    const testUser = 'testUser';
    const testPassword = 'testPassword';
    const simEvent = {
      preventDefault: jest.fn()
    }
    const simEventUser = {
      target: {
        value: testUser
      }
    }
    const simEventPassword = {
      target: {
        value: testPassword
      }
    }
    const wrapper = shallow(
      <LoginModal
        makeLogin={makeLogin}
      />);

    //set state before making login
    wrapper.find('input[placeholder="Username"]').simulate('change', simEventUser);
    wrapper.find('input[placeholder="Password"]').simulate('change', simEventPassword);

    wrapper.find('.login-btn').simulate('click', simEvent);
    expect(makeLogin).toHaveBeenCalledTimes(1);
    expect(makeLogin).toHaveBeenCalledWith(testUser, testPassword);
  });

  it('should call setUserError if no username or password', () => {
    const setUserError = jest.fn();
    const simEvent = {
      preventDefault: jest.fn()
    }
    const wrapper = shallow(
      <LoginModal setUserError={setUserError}/>);

    wrapper.setState({
      username: '',
      password: ''
    });
    wrapper.find('.login-btn').simulate('click', simEvent);
    expect(setUserError).toHaveBeenCalledTimes(1);
    expect(setUserError).toHaveBeenCalledWith('Username or Password Missing');
  });

  it('should call closeLogin on Cancel button click', () => {
    const closeLogin = jest.fn();
    const wrapper = shallow(<LoginModal close={closeLogin}/>);
    wrapper.find('.cancel-btn').simulate('click');
    expect(closeLogin).toHaveBeenCalledTimes(1);
  });
});
