import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


export class FormSection extends Component {
    render() {
        const {inputLabel, inputType, required, value, onChange} = this.props;
        return (
            // <form className="formSection">
            <Fragment>
    <label htmlFor={inputLabel}>{inputLabel}{required ? "*" : ""}</label>
              <input id={inputLabel} type={inputType} placeholder={inputLabel} value={value} onChange={onChange}/>
            </Fragment>
            // </form>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(FormSection)
