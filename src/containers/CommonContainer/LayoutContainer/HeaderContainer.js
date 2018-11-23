import React, { Component } from 'react';
import { withRouter } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as appTemplateActions from 'stores/modules/template/appTemplate.module';
import * as notificationActions from 'stores/modules/notification/notification.module';
import * as deviceActions from 'stores/modules/device/device.module';
import * as loginActions from 'stores/modules/user/login.module';
// PagePackages Components
import PagePanel from 'components/PagePackages/PagePanel/PagePanel';
// UI Components
import AppHeader from 'components/Common/Layout/AppHeader';

class HeaderContainer extends Component {
    rootSubMenuKeys = [];

    constructor (props) {
        super(props);
        this.collapsedChanged = this.collapsedChanged.bind(this);
        this.isNotification = this.isNotification.bind(this);
    }

    // 셀렉트 체인지 이벤트
    selectedHandleChange = (value) => {
        const check = value
        // 로그아웃
        if (check === 'logout') {
            this.logout();
        }
    }

    // 로그아웃
    logout = () => {
        const { history, LoginActions, dialog } = this.props;
        const dialogOptions = {
            modalType: 'confirm',
            options: {
                title: '로그아웃',
                content: '로그아웃 하시겠습니까?',
                okText: '확인',
                cancelText: '취소',
                okType: 'normal',
                maskClosable: true,
                okButtonProps: {
                    loading: false,
                },
                cancelButtonProps: {},
                onOk() {
                    localStorage.removeItem('loginInfo');
                    sessionStorage.removeItem('loginInfo');
                    LoginActions.deleteLogout();
                    history.push('/login');
                },
                onCancel() {

                },
            }
        };
        dialog.open(dialogOptions);
    }

    // 대메뉴 액티브 이벤트
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.props.openKeys.indexOf(key) === -1);
        if (this.rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
            this.props.AppTemplateActions.openKeys(openKeys);
        } else {
            this.props.AppTemplateActions.openKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    // 알림센터 온오프 이벤
    isNotification () {
        this.props.NotificationActions.is_notification(true);
    }

    // 사이드 메뉴 온오프 이벤트
    collapsedChanged = () => {
        const { isMobile, collapsed, AppTemplateActions } = this.props;
        if (!isMobile) {
            const openKeys = window.location.pathname.split('/');
            const isCollapsed = !collapsed;
            if (!isCollapsed) {
                this.onOpenChange(openKeys);
            } else {
                AppTemplateActions.openKeys([]);
            }
            AppTemplateActions.collapsedChanged(isCollapsed);
        } else {
            AppTemplateActions.collapsedChanged(false);
            AppTemplateActions.isMobileAside(true);
        }
    }

    render() {
        const { collapsed, messages } = this.props;
        const count = (messages.main.length + messages.normal.length);
        return (
            <AppHeader collapsed={collapsed}
                       selectedHandleChange={this.selectedHandleChange}
                       isAsideToggle={this.collapsedChanged}
                       isNotification={this.isNotification}
                       count={count}>
            </AppHeader>
        );
    }
}

HeaderContainer = PagePanel()(HeaderContainer);

const mapStateToProps = (state) => {
    return {
        isMobile: state.device.isMobile,
        isMobileAside: state.appTemplate.isMobileAside,
        collapsed: state.appTemplate.collapsed,
        openKeys: state.appTemplate.openKeys,
        visible: state.notification.visible,
        messages: state.notification.messages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AppTemplateActions: bindActionCreators(appTemplateActions, dispatch),
        NotificationActions: bindActionCreators(notificationActions, dispatch),
        DeviceActions: bindActionCreators(deviceActions, dispatch),
        LoginActions: bindActionCreators(loginActions, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HeaderContainer));
