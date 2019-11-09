import React, { Component, Fragment } from "react";
import Example from "./Example";
import Home from "./Home";

import { connect } from "react-redux";

import { Switch, Route, withRouter } from "react-router-dom";
import AboutContainer from "../containers/AboutContainer";

import { ThemeProvider } from "styled-components";
import Theme from "../config/Theme";

class Main extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <Fragment>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutContainer />
            </Route>
            <Route path="/example">
              <Example />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  // getItems: state.main.getItems,
  // headerDisplayed: state.common.headerDisplayed,
});

const mapDispatchToProps = {
  // onClick: test => testClick(test)
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
