import React, { Component, Fragment } from 'react'
import Login from './Login'
import Register from './Register'

export default class Authentication extends Component {
    render() {
        const {isLoginDisplayed, toggleLoginDisplay, toggleRegisterDisplay, isRegisterDisplayed} = this.props;
        return (
            <Fragment>
                {isLoginDisplayed ? (<Login toggleLoginDisplay={toggleLoginDisplay} />) : "" }
                <button onClick={toggleLoginDisplay}>Open Login</button>
                {isRegisterDisplayed ? <Register toggleRegisterDisplay={toggleRegisterDisplay}/> : ""}
                <button onClick={toggleRegisterDisplay}>Open Register</button>
            </Fragment>
        )
    }
}
