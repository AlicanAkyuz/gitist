import { hot } from 'react-hot-loader/root';
import React, { FunctionComponent, Fragment } from 'react';

import Routes from './routes';
import Navbar from './components/Navbar';

const App: FunctionComponent = () => (
  <Fragment>
    <Navbar />
    <Routes />
  </Fragment>
);

export default hot(App);
