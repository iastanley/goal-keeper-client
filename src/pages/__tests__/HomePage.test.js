import React from 'react';
import { shallow, mount } from 'enzyme';

import { HomePage } from '../HomePage';

describe('HomePage', () => {
  it('should shallow render', () => {
    shallow(<HomePage />);
  });
});
