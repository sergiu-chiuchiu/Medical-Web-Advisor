import React, { Component } from "react";
import { connect } from "react-redux";

import { clickTest } from '../actions/TestActions'


const mapStateToProps = (state) => ({
  myTestString: state.example.testString
})

const mapDispatchToProps = dispatch => ({
  changeTestString: newString => dispatch(clickTest(newString))
})

class About extends Component {
  render() {
    const { myTestString, changeTestString } = this.props
    return (
      <div>
        <b>{myTestString}</b> About page 
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Perspiciatis quae sint natus quam aut eum, ad labore velit quidem
        placeat, consequatur aspernatur rerum quos hic magnam dolor, dolore
        sunt. Exercitationem!</div>
        <button onClick={() => changeTestString("kkk")}>Click me</button>
      </div>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
