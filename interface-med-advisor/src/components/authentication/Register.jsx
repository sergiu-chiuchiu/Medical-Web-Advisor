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
import Button from "@material-ui/core/Button";


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
                color="#1974CF"
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
              <form className="formSection">
                <FormSection inputLabel="Username" required />
                <FormSection inputLabel="Name" />
                <FormSection inputLabel="Email" required />
                <FormSection inputLabel="Password" required />
                <FormSection inputLabel="Repeat Password" required />
                <section className="termsAndCond">
                  <input type="checkbox" />
                  <span>I agree to the terms and conditions*</span>
                </section>
                <br />
                <Button
                variant="outlined"
                color="primary"
                // onClick={evt => this.handleRegisterSubmit(evt)}
              >
                Register
              </Button>
              </form>
            </div>
          </Modal>
        </ModalBackground>
      </Fragment>
    );
  }
}
