import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Icon, Badge, Select } from 'antd';

const Option = Select.Option;
const { Header } = Layout;

const defaultProps = {
    collapsed: false,
    selectedHandleChange: createWarning('handleChange'),
    isAsideToggle: createWarning('isAsideToggle'),
    count: 0,
};

const propTypes = {
    collapsed: PropTypes.bool,
    selectedHandleChange: PropTypes.func,
    isAsideToggle: PropTypes.func,
    count: PropTypes.number,
};

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

// components
const AppHeader = ({ collapsed,isAsideToggle, selectedHandleChange, isNotification, count }) => {
    return (
        <Header id="header" style={{ background: '#fff', padding: 0 }}>
            <div className="box-area box-left">
                <Icon className="icons trigger"
                      type={collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={isAsideToggle}/>
                <h1><Link to="/">리액트샘플</Link></h1>
            </div>
            <div className="box-area box-right">
                <Icon className="icons setting"
                      type="setting"
                      theme="outlined" />
                <Badge count={count}
                       onClick={isNotification}>
                    <Icon className="icons notification"
                          type="bell"
                          theme="outlined"/>
                </Badge>
                <Select className="user-menu-select"
                        defaultValue="lucy"
                        onChange={selectedHandleChange}
                        dropdownClassName="user-menu-dropdown">
                    <Option value="jack">계정1</Option>
                    <Option value="lucy">계정2</Option>
                    <Option value="mypage">마이페이지</Option>
                    <Option value="logout">로그아웃</Option>
                </Select>
            </div>
        </Header>
    );
}

AppHeader.propTypes = propTypes;
AppHeader.defaultProps = defaultProps;

export default AppHeader;
