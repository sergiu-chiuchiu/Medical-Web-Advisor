import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class MedicalStaff extends Component {
    render() {
        return (
            <div>
                My example page
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(MedicalStaff);