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
        <ul>
          <li>
            |Home component
            <Link to="/">Home</Link>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);
