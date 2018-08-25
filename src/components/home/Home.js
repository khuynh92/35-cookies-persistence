import React, { Component, Fragment } from 'react';

import {  Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import { logInThunk, logIn } from '../../action/logIn-action.js';

import LogInForm from '../log-in-form/logInForm.js';





class Home extends Component {
  componentDidMount() {
    if(localStorage && localStorage.token) {
      this.props.logIn();
    }
  }
  render() {
    console.log('are you logged in? : ', this.props.isLoggedIn);
    return (
      <Fragment>
        {!this.props.isLoggedIn ? <LogInForm logIn={this.props.logInThunk} /> : <Redirect to={{pathname: '/dashboard'}}/>}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

const mapDispatchToProps = dispatch => ({
  logInThunk: user => dispatch(logInThunk(user)),
  logIn: user => dispatch(logIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);