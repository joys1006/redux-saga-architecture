import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';


const defaultProps = {
    title: '알림센터',
    placement: '',
    closable: false,
    onClose: createWarning('onClose'),
    visible: false,
};

const propTypes = {
    title: PropTypes.string,
    placement: PropTypes.string,
    closable: PropTypes.bool,
    onClose: PropTypes.func,
    visible: PropTypes.bool,
};

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

const Notification = ({ title, placement, closable, visible, onClose, children }) => {
    return (
        <Drawer className="notification"
                title={ title }
                placement={ placement }
                closable={ closable }
                onClose={ onClose }
                visible={ visible }>
            {children}
        </Drawer>
    );
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
