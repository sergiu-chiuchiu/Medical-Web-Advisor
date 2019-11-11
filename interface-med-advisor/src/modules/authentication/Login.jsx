import React, { Component } from "react";
import { connect } from "react-redux";
import { ModalBackground, Modal, ModalHeader, ModalHeaderText } from "./Login.style";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Login extends Component {
  render() {
    return (
      <div>
        Login
        <ModalBackground><Modal>
            <ModalHeader>
              
              <ModalHeaderText marginBottom={"0"} marginTop={"0"} fontSizeEm={"0.75"}>Welcome back to our website!</ModalHeaderText>
              <ModalHeaderText marginTop={"0"} fontSizeEm={"0.75"}>Fill out the form to log in to the webiste</ModalHeaderText>
            </ModalHeader>
          </Modal></ModalBackground>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
