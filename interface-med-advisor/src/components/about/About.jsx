import React, { Component } from "react";
import PropTypes from "prop-types";
import StyleH1 from "./About.styled";


class About extends Component {
  render() {
    const { myTestString, changeTestString } = this.props;
    const myFontSize = 12;
    return (
      <div>
        <StyleH1 fontSize={myFontSize}>About page</StyleH1>
        <b>{myTestString}</b> 
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          quae sint natus quam aut eum, ad labore velit quidem placeat,
          consequatur aspernatur rerum quos hic magnam dolor, dolore sunt.
          Exercitationem!
        </div>
        <button onClick={() => changeTestString("kkk")}>Click me</button>
      </div>
    );
  }
}

About.propTypes = {
  myTestString: PropTypes.string.isRequired,
  // todos: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     completed: PropTypes.bool.isRequired,
  //   }).isRequired
  // ).isRequired,
  // toggleTodo: PropTypes.func.isRequired
};

export default About;
