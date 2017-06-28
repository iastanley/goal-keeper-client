import React from 'react';
import { shallow, mount } from 'enzyme';

import LandingPage from '../LandingPage';

describe('LandingPage', () => {
  it('should shallow render', () => {
    shallow(<LandingPage/>);
  });
});
