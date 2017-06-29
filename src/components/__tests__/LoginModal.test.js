import React from 'react';
import { shallow, mount } from 'enzyme';

import LoginModal from '../LoginModal';

describe('LoginModal', ()=>{
  it('should render', () => {
    shallow(<LoginModal/>);
  });

  it('should call Login on click', () => {
    const wrapper = shallow(<LoginModal/>);

  });
});
