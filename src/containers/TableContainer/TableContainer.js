import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// UI components
import TableSample1 from 'components/Table/TableSample1';

// Actions
import * as tableActions from 'stores/modules/example/table.module';

class TableContainer extends Component {

    constructor (props) {
        super(props);
        this.state = {
            pagination: {},
            columns: [{
                title: 'Name',
                dataIndex: 'name',
                sorter: true,
                render: name => `${name.first} ${name.last}`,
                width: '20%',
            }, {
                title: 'Gender',
                dataIndex: 'gender',
                filters: [
                    { 
                        text: 'Male',
                        value: 'male' 
                    },
                    { 
                        text: 'Female',
                        value: 'female' 
                    },
                ],
                width: '20%',
            }, {
                title: 'Email',
                dataIndex: 'email',
            }]
        };
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        const payload = {
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters,
        };
        pager.current = pagination.current;

        this.setState({
            pagination: pager,
        });

        this.getTableData(payload);

    }

    getTableData = async (params = {}) => {

        const { TableActions, loading } = this.props;
        const samplePayload = {
            results: 10,
            ...params,
        };

        try {
            await TableActions.getTableDataRequest(samplePayload)
            if (!loading) {
                this.getTableDataCallBack();
            }
        } catch(e) {
            console.log(e);
        }
    }

    getTableDataCallBack = () => {
        const pagination = { ...this.state.pagination };
        pagination.total = 200;
        this.setState({
            pagination,
        });
    }

    componentDidMount () {
        this.getTableData();
    }

    render () {
        const { columns, pagination } = this.state;
        const { data, loading } = this.props;
        return (
            <TableSample1 columns={columns}
                          changedDataEventHandler={this.handleTableChange}
                          loading={loading}
                          pagination={pagination}
                          data={data} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.table.data,
        loading: state.table.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        TableActions: bindActionCreators(tableActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableContainer);
