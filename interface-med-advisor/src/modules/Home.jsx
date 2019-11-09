import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {};
}

class Home extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);
