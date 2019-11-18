import React, { Component } from "react";
import "./Menu.css";
import searchIcon from "./search-icon.png";
import { withRouter, Link } from 'react-router-dom'

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false
    };
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }
  
  render() {
    const { toggleLoginDisplay, toggleRegisterDisplay } = this.props;

    let searchForm = this.state.showForm ? (
      <form className="menu__search-form" method="POST">
        <input
          className="menu__search-input"
          placeholder="Type and hit enter"
        />
      </form>
    ) : (
      ""
    );

    let linksMarkup = this.props.links.map((link, index) => {
      let linkMarkup = link.active ? (
        <Link className="menu__link menu__link--active" to={link.link}>
          {link.label}
        </Link>
      ) : (
        <a className="menu__link" href={link.link}>
          {link.label}
        </a>
      );

      return (
        <li key={index} className="menu__list-item">
          {linkMarkup}
        </li>
      );
    });

    return (
      <nav className="menu">
        <h1
          style={{
            backgroundImage: "url(" + this.props.logo + ")"
          }}
          className="menu__logo"
        >
          Medical Advisor
        </h1>

        <div className="menu__right">
          <ul className="menu__list">
            {linksMarkup}
            <li onClick={toggleRegisterDisplay} className="menu__list-item">
              <span className="menu__link">
                Register
              </span>
            </li>
            <li onClick={toggleLoginDisplay} className="menu__list-item">
              <span  className="menu__link" >
                Login
              </span>
            </li>
          </ul>

          <button
            onClick={this.showForm.bind(this)}
            style={{
              backgroundImage: "url(" + searchIcon + ")"
            }}
            className="menu__search-button"
          ></button>

          {searchForm}
        </div>
      </nav>
    );
  }
}

export default withRouter(Menu)