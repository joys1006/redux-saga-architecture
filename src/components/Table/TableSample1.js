import React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'antd';


const defaultProps = {
    data: [],
    pagination: {},
    loading: false,
    changedDataEventHandler: createWarning('changedDataEventHandler')
};

// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,
const propTypes = {
    data: PropTypes.array,
    pagination: PropTypes.object,
    loading: PropTypes.bool,
    changedDataEventHandler: PropTypes.func
};


function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

const TableSample1 = (props) => {
    return (
        <Table
            columns={props.columns}
            rowKey={record => record.login.uuid}
            dataSource={props.data}
            pagination={props.pagination}
            loading={props.loading}
            onChange={props.changedDataEventHandler}
        />
    );
}

TableSample1.propTypes = propTypes;
TableSample1.defaultProps = defaultProps;

export default TableSample1;