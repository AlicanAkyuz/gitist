import React from 'react';
import { shallow } from 'enzyme';

import Developers from './Developers';

it('Developers corrently renders a navbar and Routes component', () => {
  const wrapper = shallow(<Developers />);
  expect(wrapper).toMatchSnapshot();
});
