import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthenticationContainer from "../containers/AuthenticationContainer";

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

  render() {
    return (
      <Fragment>
        <AuthenticationContainer />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/example">Example</Link>
            </li>
          </ul>
        </nav>
        <button>
          <Link to="/about">About page</Link>
        </button>

        <button>Register</button>
        <p>News Page</p>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);
