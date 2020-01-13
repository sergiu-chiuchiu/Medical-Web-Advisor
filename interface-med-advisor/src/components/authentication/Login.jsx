import React, { Component } from "react";
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = evt => {
    this.setState({ email: evt.target.value });
  };
  
  handlePasswordChange = evt => {
    this.setState({ password: evt.target.value });
  };

  handleLoginSubmit = evt => {
    const authData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.submitLogin(authData)
  };

  render() {
    const { toggleLoginDisplay } = this.props;
    
    return (
      <ModalBackground>
        <Modal>
          <ModalHeader>
            <FontAwesomeIcon
              size="lg"
              className="closeRegister"
              onClick={toggleLoginDisplay}
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
                inputLabel="Email"
                required
                onChange={evt => this.handleEmailChange(evt)}
                value={this.state.email}
              />
              <FormSection
                inputLabel="Password"
                inputType="password"
                required
                onChange={evt => this.handlePasswordChange(evt)}
                value={this.state.password}
              />
              <br />
              <br />
              <Button
                variant="outlined"
                color="primary"
                onClick={evt => this.handleLoginSubmit(evt)}
              >
                Login
              </Button>
            </form>
          </div>
        </Modal>
      </ModalBackground>
    );
  }
}

export default Login;
