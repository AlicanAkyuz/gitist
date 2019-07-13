import React from 'react';
import { shallow } from 'enzyme';

import Navbar from './Navbar';

it('Navbar corrently renders a header with title', () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper).toMatchSnapshot();
});
