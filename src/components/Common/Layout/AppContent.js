import React from 'react';

const defaultProps = {
};

const propTypes = {
};

const AppContent = ({ id, children }) => {
    return (
        <div id={ id }
             className="contents">
            <div className="contents-widget">
                {children}
            </div>
        </div>
    )
}

AppContent.propTypes = propTypes;
AppContent.defaultProps = defaultProps;

export default AppContent;