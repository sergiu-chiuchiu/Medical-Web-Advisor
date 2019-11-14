import { connect } from "react-redux";
import About from "../modules/about/About";

import { clickTest } from "../actions/TestActions";

const mapStateToProps = state => ({
  myTestString: state.example.testString
});

const mapDispatchToProps = dispatch => ({
  changeTestString: newString => dispatch(clickTest(newString))
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
