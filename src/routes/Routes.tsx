import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Locations from './Locations';
import Developers from './Developers';

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Locations} />
    <Route path="/feed" exact component={Developers} />
  </Switch>
);

export default Routes;
