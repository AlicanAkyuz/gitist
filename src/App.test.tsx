import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('App corrently renders a navbar and Routes component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
