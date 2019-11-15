import { connect } from "react-redux";
import Authentication from "../components/authentication/Authentication";
import { toggleLoginDisplay, toggleRegisterDisplay} from "../actions/AuthenticationActions";

const mapStateToProps = state => ({
  ...state.authentication
});

const mapDispatchToProps = dispatch => {
  return {
    toggleLoginDisplay: () => dispatch(toggleLoginDisplay()),
    toggleRegisterDisplay: () => dispatch(toggleRegisterDisplay())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
