import React from 'react';

const badge = ({ type, children }) => {
    return (
        <div className={ type }>
            { children }
        </div>
    )
}

export default badge;