import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import logo from "./../components/menu/logo.png";
import Home from "./Home";
import { Switch, Route, withRouter } from "react-router-dom";
import AboutContainer from "../containers/AboutContainer";
import { ThemeProvider } from "styled-components";
import Theme from "../config/Theme";
import MedicalStaff from "./MedicalStaff";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import MenuContainer from "../containers/MenuContainer";

class Main extends Component {
  render() {
    let links = [
      { label: "Home", link: "/home", active: true },
      { label: "Medical Staff", link: "/medicalstaff" },
      { label: "Feeds", link: "#feeds" },
      { label: "Contact", link: "#contact-us" },
      { label: "About", link: "/about" },
      // { label: "Login", link: "/login" },
      // { label: "Register", link: "/register" }
    ];

    const { isLoginDisplayed, isRegisterDisplayed } = this.props;
    const { toggleLoginDisplay, toggleRegisterDisplay} = this.props;


    return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          <div className="container center">
            <MenuContainer links={links} logo={logo} />
          </div>

          {isLoginDisplayed ? (<Login toggleLoginDisplay={toggleLoginDisplay} />) : "" }
          {isRegisterDisplayed ? (<Register toggleRegisterDisplay={toggleRegisterDisplay} />) : "" }

          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <AboutContainer />
            </Route>
            <Route path="/medicalstaff">
              <MedicalStaff />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  ...state.authentication,
  // getItems: state.main.getItems,
  // headerDisplayed: state.common.headerDisplayed,
});

const mapDispatchToProps = {
  // onClick: test => testClick(test)
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
