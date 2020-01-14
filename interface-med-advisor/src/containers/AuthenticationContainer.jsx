import { connect } from "react-redux";
import Authentication from "../components/authentication/Authentication";
import { toggleLoginDisplay, toggleRegisterDisplay, submitLogin, submitRegister} from "../actions/AuthenticationActions";

const mapStateToProps = state => ({
  ...state.authentication
});

const mapDispatchToProps = dispatch => {
  return {
    toggleLoginDisplay: () => dispatch(toggleLoginDisplay()),
    toggleRegisterDisplay: () => dispatch(toggleRegisterDisplay()),
    submitLogin: (loginData) => dispatch(submitLogin(loginData)),
    submitRegister: (registerData) => dispatch(submitRegister(registerData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
