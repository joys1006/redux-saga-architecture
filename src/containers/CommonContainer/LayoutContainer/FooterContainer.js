import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

// UI Components
import AppFooter from 'components/Common/Layout/AppFooter';

class FooterContainer extends Component {
    render() {
        const { children, history } = this.props;
        return (
            <AppFooter history={history}>
                {children}
            </AppFooter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(FooterContainer));
