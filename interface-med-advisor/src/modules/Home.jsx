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
    const { displayLogin } = this.state;
    return (
      <Fragment>
        {displayLogin ? <Login/> : null}
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
        <button onClick={this.openLoginForm}>Login</button>
        <button>Register</button>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps)(Home);
