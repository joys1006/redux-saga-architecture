import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

// RoutesKeys
import { routeConfig } from 'routes/configure';

// UI component
import AppAside from 'components/Common/Layout/AppAside';

// Actions
import * as appTemplateActions from 'stores/modules/template/appTemplate.module';

class AsideContainer extends Component {
    rootSubMenuKeys = [];

    constructor (props) {
        super(props);
        this.changedSelectedKey = this.changedSelectedKey.bind(this);
    }

    componentWillMount () {
        this.init();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.init();
        }
    }

    init = () => {
        const openKeys = window.location.pathname.split('/');
        const { AppTemplateActions, collapsed } = this.props;
        if (!collapsed) {
            this.onOpenChange(openKeys);
            AppTemplateActions.changedSelectedKey([window.location.pathname]);
        }
        this.rootSubMenuKeyPush();
    }
    
    // 서브 메뉴 키 추가
    rootSubMenuKeyPush () {
        _.reduce(routeConfig, (prev, value, i) => {
            if (value['children'].length > 0) {
                this.rootSubMenuKeys.push(value.path);
            }
        });
    }

    // 대메뉴 액티브 이벤트
    onOpenChange = (openKeys) => {
        const { AppTemplateActions } = this.props;
        const latestOpenKey = openKeys.find(key => this.props.openKeys.indexOf(key) === -1);
        if (this.rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
            AppTemplateActions.openKeys(openKeys);
        } else {
            AppTemplateActions.openKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    }

    // 메뉴 변경 이벤트시 선택 키값 변경
    changedSelectedKey (item) {
        const { menuSelectedKey, AppTemplateActions } = this.props;
        if (menuSelectedKey !== window.location.pathname) {
            AppTemplateActions.changedSelectedKey([item.key]);
        }
    }

    render() {
        const { collapsed, menuSelectedKey, children, openKeys } = this.props;
        return (
            <AppAside collapsed={collapsed}
                      menuSelectedKey={menuSelectedKey}
                      changedSelectedKey={this.changedSelectedKey}
                      onOpenChange={this.onOpenChange}
                      openKeys={openKeys}>
                      {children}
            </AppAside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        collapsed: state.appTemplate.collapsed,
        openKeys: state.appTemplate.openKeys,
        menuSelectedKey: state.appTemplate.menuSelectedKey
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AppTemplateActions: bindActionCreators(appTemplateActions, dispatch)
    };
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AsideContainer));
