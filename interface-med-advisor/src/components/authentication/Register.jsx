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
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      name: "",
      email: "",
      password: ""
    };
  }

  handleUserNameChange = evt => {
    this.setState({ userName: evt.target.value });
  };

  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };

  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleRegisterSubmit = evt => {
    const authData = {
      userName: this.state.userName,
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.submitRegister(authData)
  };

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
                <FormSection
                  inputLabel="Username"
                  required
                  onChange={evt => this.handleUserNameChange(evt)}
                  value={this.state.userName}
                />
                <FormSection
                  inputLabel="Name"
                  onChange={evt => this.handleNameChange(evt)}
                  value={this.state.name}
                />
                <FormSection
                  inputLabel="Email"
                  required
                  onChange={evt => this.handleEmailChange(evt)}
                  value={this.state.email}
                />
                <FormSection
                  inputLabel="Password"
                  required
                  inputType="password"
                  onChange={evt => this.handlePasswordChange(evt)}
                  value={this.state.password}
                />
                <FormSection
                  inputLabel="Repeat Password"
                  required
                  inputType="password"
                />
                <section className="termsAndCond">
                  <input type="checkbox" />
                  <span>I agree to the terms and conditions*</span>
                </section>
                <br />
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={evt => this.handleRegisterSubmit(evt)}
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
