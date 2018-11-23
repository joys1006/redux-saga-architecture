import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { Layout, Menu, Icon } from 'antd';
// RoutesKeys
import { routeConfig } from 'routes/configure';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const defaultProps = {
    collapsed: false,
    openKeys: ['/'],
    menuSelectedKey: ['/'],
    onOpenChange: createWarning('onOpenChange'),
    changedSelectedKey: createWarning('changedSelectedKey'),
};

const propTypes = {
    collapsed: PropTypes.bool,
    openKeys: PropTypes.array,
    menuSelectedKey: PropTypes.array,
    onOpenChange: PropTypes.func,
    changedSelectedKey: PropTypes.func,
};

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined');
}

// 서브메뉴 생성
const createSubMenus = (value, i) => {
    let subMenus = [];
    _.reduce(value.children, (prev, subValue, index) => {
        if (subValue.menu) {
            subMenus.push(
                <Menu.Item key={subValue.path}>
                    <Link to={subValue.path}>
                        <span>{subValue.name}</span>
                    </Link>
                </Menu.Item>
            );
        }
    }, 0);
    return (
        <SubMenu key={value.path}
                 title={
                    <span>
                        <Icon type={value.type} />
                        <span>{value.name}</span>
                    </span>
                 }>
            {subMenus}
        </SubMenu>
    );
};

// 메뉴 생성
const createMenus = (value, i) => {
    let menus = [];
    _.reduce(routeConfig, (prev, value, i) => {
        if (value.menu) {
            if (value.children.length === 0) {
                menus.push(
                    <Menu.Item key={value.path}>
                        <Link to={value.path}>
                            <Icon type={value.type} />
                            <span>{value.name}</span>
                        </Link>
                    </Menu.Item>
                );
            } else {
                menus = [
                    ...menus,
                    createSubMenus(value, i)
                ];
            }
        } 
    }, 0);
    return menus;
};

const AppAside = ({ collapsed,openKeys,menuSelectedKey,onOpenChange,changedSelectedKey,children }) => {
    return (
        <Sider id="aside"
               trigger={null}
               collapsible
               collapsed={collapsed}>

            {/* 네비게이션 메뉴 */}
            <Menu theme="white"
                  mode="inline"
                  openKeys={openKeys}
                  selectedKeys={menuSelectedKey}
                  onOpenChange={onOpenChange}
                  onClick={changedSelectedKey}>
                {createMenus()}
            </Menu>
            {/* // 네비게이션 메뉴 */}
            {children}
        </Sider>
    );
};

AppAside.propTypes = propTypes;
AppAside.defaultProps = defaultProps;

export default AppAside;