import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NewRoom from '../pages/NewRoom';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" exact component={NewRoom} />
    </Switch>
  );
};

export default Routes;
