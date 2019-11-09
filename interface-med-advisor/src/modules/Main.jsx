import React, { Component, Fragment } from "react";
import About from './About' 
import Example from './Example' 
import Home from './Home'

import { connect } from "react-redux";

import { testClick } from '../actions/HomeActions'

import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

class Main extends Component {
  render() {
  return (
    <Fragment>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Fragment>
  )};
}

const mapStateToProps = state => ({
  // getItems: state.main.getItems,
  // headerDisplayed: state.common.headerDisplayed,
});

const mapDispatchToProps = {
  onClick: test => testClick(test)
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);