import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store.js';

import Home from './home/Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashbaord from './Dashboard/dashboard.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashbaord}/>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
