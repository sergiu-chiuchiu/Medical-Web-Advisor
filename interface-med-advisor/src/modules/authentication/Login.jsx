import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ModalBackground,
  Modal,
  ModalHeader,
  ModalHeaderText
} from "./Login.style";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormSection } from "./components/FormSection";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Login extends Component {
  closeModal = () => {
    console.log("dfsfdsfds");
  };

  render() {
    return (
      <div>
        Login
        <ModalBackground>
          <Modal>
            <ModalHeader>
              <FontAwesomeIcon
                size="lg"
                className="closeLogin"
                onClick={this.closeModal}
                icon={faWindowClose}
              />
              <ModalHeaderText
                marginBottom={"0"}
                marginTop={"0"}
                fontSizeEm={"0.75"}
              >
                Welcome back to our website!
              </ModalHeaderText>
              <ModalHeaderText marginTop={"0"} fontSizeEm={"0.75"}>
                Fill out the form to log in to the webiste
              </ModalHeaderText>
            </ModalHeader>
            <div className="loginWrapper">
              <FormSection inputLabel="Username" required />
              <FormSection inputLabel="Name" />
              <FormSection inputLabel="Email" required />
              <FormSection inputLabel="Password" required />
              <section className="termsAndCond">
                <input type="checkbox" />
                <span>I agree to the terms and conditions*</span>
              </section>
              <input className="submitButton" type="submit" value="Login" />
            </div>
          </Modal>
        </ModalBackground>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login);
