import React from 'react';
import Main from './../containers/Main';
import App from './../components/App';
import { Router, Route, DefaultRoute } from 'react-router';

export default (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute handler={App} />
  </Route>
);

