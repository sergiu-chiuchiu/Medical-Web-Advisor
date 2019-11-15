import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Menu from './../components/menu/Menu';
import Footer from './../components/footer/Footer'
import logo from './../components/menu/logo.png';
import Home from './Home'
import { Switch, Route, withRouter } from "react-router-dom";
import AboutContainer from "../containers/AboutContainer";
import { ThemeProvider } from "styled-components";
import Theme from "../config/Theme";
import MedicalStaff from "./MedicalStaff";
import Login from "./../modules/authentication/Login"

class Main extends Component {
  render() {
    let links = [
      { label: 'Home', link: '/home', active: true},
      { label: 'Medical Staff', link: '/medicalstaff'},
      { label: 'Feeds', link: '#feeds' },
      { label: 'Contact', link: '#contact-us' },
      { label: 'About', link: '/about' },
      { label: 'Login', link: '/login' },
      { label: 'Register', link: '#register' },
    ];

    return (
      <div className="App">
        <div className="container center" >
                <Menu links={links} logo={logo}/>
        </div>
        <ThemeProvider theme={Theme}>
            <Fragment>
              {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/about">
                    <AboutContainer />
                  </Route>
                  <Route path="/medicalstaff">
                    <MedicalStaff />
                  </Route>
                  <Route path="/" >
                    <Home />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                </Switch>
            </Fragment>
        </ThemeProvider>
        <Footer />
      </div>
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
