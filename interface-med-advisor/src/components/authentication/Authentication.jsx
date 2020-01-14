import React, { Component, Fragment } from 'react'
import Login from './Login'
import Register from './Register'

export default class Authentication extends Component {
    render() {
        const {isLoginDisplayed, toggleLoginDisplay, toggleRegisterDisplay, isRegisterDisplayed, submitLogin, submitRegister} = this.props;
        return (
            <Fragment>
                {isLoginDisplayed ? (<Login toggleLoginDisplay={toggleLoginDisplay} submitLogin={submitLogin} />) : "" }
                {isRegisterDisplayed ? <Register toggleRegisterDisplay={toggleRegisterDisplay} submitRegister={submitRegister} /> : ""}
            </Fragment>
        )
    }
}
