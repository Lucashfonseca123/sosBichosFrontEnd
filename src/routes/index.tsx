import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, SignIn } from '../features/authentication/screens';
import Dashboard from '../features/dashboard';

// import Route from "./Route";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
