import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutThunk } from '../../action/logIn-action.js';

class Dashboard extends Component {
  render() {
    return (
      this.props.isLoggedIn ? <DashboardContent logOutThunk={this.props.logOutThunk} /> : <Redirect to={{ pathname: '/' }} />
    );
  }
}

const DashboardContent = (props) => {
  return (
    <Fragment>
      <h2>Welcome to the Dashboard!</h2>
      <button onClick={props.logOutThunk}>Sign Out</button>
    </Fragment>
  );
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

const mapDispatchToProps = dispatch => ({
  logOutThunk: user => dispatch(logOutThunk(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);