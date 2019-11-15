import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./authentication/Login";

function mapStateToProps(state) {
  return {};
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: true
    };
  }

  openLoginForm = () => {
    this.setState({ displayLogin: true });
  };

  render() {
    return (
      <p>News Page</p>
    );
  }
}

export default connect(mapStateToProps)(Home);
