import React from 'react';
import { shallow, mount } from 'enzyme';

import { LandingPage } from '../LandingPage';

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
        userError="userError"
        isLoading={true}
      />);
    expect(wrapper.find('LoginModal')).toHaveLength(1);
    expect(wrapper.find('SignUpModal')).toHaveLength(1);
    expect(wrapper.find('Button')).toHaveLength(1);
    const loginModal = wrapper.find('LoginModal');
    console.log(loginModal.makeLogin);
    expect(loginModal.prop('show')).toEqual(false);
    expect(loginModal.prop('userError')).toEqual("userError");
    expect(loginModal.prop('isLoading')).toEqual(true);
    // expect(loginModal.prop('makeLogin')).toHaveLength(1);
  });

  // it('should call callbacks', () => {
  //   const dispatchSpy = jest.fn();
  //
  //   const wrapper = shallow(
  //     <LandingPage
  //       dispatch={dispatchSpy}
  //     />
  //   )
  // });

});

// test props

// test callback and events
