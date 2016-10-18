import React from 'react';
import Main from '../components/Main';
import  Home from '../components/Home';

import Profile from '../components/Profile';
import Router from 'react-router';
import { Route, IndexRoute } from 'react-router';

module.exports = (
  <Route path="/" component = {Main}>
  <Route path="profile/:username" component={Profile} />
    <IndexRoute component = {Home} />
  </Route>
);
