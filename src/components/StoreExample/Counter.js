import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'antd';


const defaultProps = {
    number: -1,
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};

const propTypes = {
    number: PropTypes.number,
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};



function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}


const Counter = (props) => {
    return (
        <div>
            <h1>{ props.number }</h1>
            <Button type="primary" onClick={ props.onPlus }>+</Button>
            <Button type="primary" onClick={ props.onSubtract }>-</Button>
            <Button type="primary" onClick={ props.onRandomizeColor }>Randomize Color</Button>
        </div>
    );
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;