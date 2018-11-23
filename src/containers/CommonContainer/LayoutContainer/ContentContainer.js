import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// UI Components
import AppContent from 'components/Common/Layout/AppContent';

// Actions
import * as appTemplateActions from 'stores/modules/template/appTemplate.module';

class ContentContainer extends Component {
    componentWillMount () {
        const { isLayout, AppTemplateActions } = this.props;
        AppTemplateActions.isLayout(isLayout);
    }
    render() {
        const { id, children } = this.props;
        return (
            <AppContent id={ id }>
                {children}
            </AppContent>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AppTemplateActions: bindActionCreators(appTemplateActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentContainer);
