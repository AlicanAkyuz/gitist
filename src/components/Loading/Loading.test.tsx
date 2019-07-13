import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

it('Loading corrently renders a loading message', () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});
