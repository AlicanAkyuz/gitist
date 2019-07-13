import React from 'react';
import { shallow } from 'enzyme';

import Error from './Error';

it('Error corrently renders an error message', () => {
  const wrapper = shallow(<Error />);
  expect(wrapper).toMatchSnapshot();
});
