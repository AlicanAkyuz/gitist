import React from 'react';
import { shallow } from 'enzyme';

import Locations from './Locations';

it('Locations corrently renders a navbar and Routes component', () => {
  const wrapper = shallow(<Locations />);
  expect(wrapper).toMatchSnapshot();
});
