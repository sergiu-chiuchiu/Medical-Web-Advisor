import React, { Component, Fragment } from "react";
import {
  ModalBackground,
  Modal,
  ModalHeader,
  ModalHeaderText
} from "./Register.style";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormSection } from "./components/FormSection";

export default class Register extends Component {
  render() {
    const { toggleRegisterDisplay } = this.props;
    return (
      <Fragment>
        <ModalBackground>
          <Modal>
            <ModalHeader>
              <FontAwesomeIcon
                size="lg"
                className="closeRegister"
                onClick={toggleRegisterDisplay}
                icon={faWindowClose}
              />
              <ModalHeaderText
                marginBottom={"0"}
                marginTop={"0"}
                fontSizeEm="0.8"
              >
                Welcome back to our website!
              </ModalHeaderText>
              <ModalHeaderText
                marginTop={"0"}
                marginBottom="10px"
                fontSizeEm="0.8"
              >
                Fill out the form to log in to the webiste
              </ModalHeaderText>
            </ModalHeader>
            <div className="registerWrapper">
              <FormSection inputLabel="Username" required />
              <FormSection inputLabel="Name" />
              <FormSection inputLabel="Email" required />
              <FormSection inputLabel="Password" required />
              <FormSection inputLabel="Repeat Password" required />
              <section className="termsAndCond">
                <input type="checkbox" />
                <span>I agree to the terms and conditions*</span>
              </section>
              <input className="submitButton" type="submit" value="Register" />
            </div>
          </Modal>
        </ModalBackground>
      </Fragment>
    );
  }
}
