import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// UI Components
import Notification from 'components/Common/Notification/Notification';
import NotificationItems from 'components/Common/Notification/NotificationItems';

// Actions
import * as notificationActions from 'stores/modules/notification/notification.module';

class NotificationContainer extends Component {

    constructor (props) {
        super(props);
        this.onClose = this.onClose.bind(this);
    }

    onClose () {
        this.props.NotificationActions.is_notification(false);
    }
    
    render() {
        const { visible, messages } = this.props;
        return (
            <Notification title="알림센터"
                          placement="right"
                          closable={false}
                          onClose={this.onClose}
                          visible={visible}>
                <NotificationItems messages={messages} />
            </Notification>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        visible: state.notification.visible,
        messages: state.notification.messages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        NotificationActions: bindActionCreators(notificationActions, dispatch)
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NotificationContainer);
