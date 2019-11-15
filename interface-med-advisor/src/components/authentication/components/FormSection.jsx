import React, { Component } from 'react'
import { connect } from 'react-redux'


export class FormSection extends Component {
    render() {
        const {inputLabel, inputType, required} = this.props;
        return (
            <form className="formSection">
    <label htmlFor={inputLabel}>{inputLabel}{required ? "*" : ""}</label>
              <input id={inputLabel} type={inputType} placeholder={inputLabel} />
            </form>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(FormSection)
