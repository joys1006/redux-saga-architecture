import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// antd
import { Layout, Drawer } from 'antd';
// Layout Container
import HeaderContainer from 'containers/CommonContainer/LayoutContainer/HeaderContainer';
import AsideContainer from 'containers/CommonContainer/LayoutContainer/AsideContainer';
import FooterContainer from 'containers/CommonContainer/LayoutContainer/FooterContainer';
import NotificationContainer from 'containers/CommonContainer/NotificationContainer/NotificationContainer';
// UI Components
import AppTemplate from 'components/Common/AppTemplate';

// Actions
import * as appTemplateActions from 'stores/modules/template/appTemplate.module';
import * as deviceActions from 'stores/modules/device/device.module';

const { Content } = Layout;

class AppTemplateContainer extends Component {
    state = {
        update: false,
    }

    constructor(props) {
        super(props);
        this.isAside = this.isAside.bind(this);
    }

    componentDidMount() {
        this.enquireHandler = enquireScreen(mobile => {
            const { isMobile, DeviceActions } = this.props;
            if (isMobile !== mobile) {
                DeviceActions.isMobile(mobile);
            }
        });
    }

    componentDidUpdate(prevProps) {
        const { isMobile, location } = this.props;
        const { collapsed, AppTemplateActions } = this.props;
        if (isMobile && !prevProps.isMobile && !collapsed) {
            AppTemplateActions.isMobileAside(false);
            AppTemplateActions.collapsedChanged(false);
        }
        if (location !== prevProps.location) {
            this.setState({
                update: true,
            }, () => {
                this.setState({
                    update: false,
                });
            });
        }
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    isAside = () => {
        const { AppTemplateActions } = this.props;
        AppTemplateActions.isMobileAside(false);
    }


    // 사이드 메뉴 온오프 이벤트
    render() {
        const { isMobile, isMobileAside, isLayout, children } = this.props;
        const templateCheck = (isLayout === undefined) ? true:isLayout;
        
        if (templateCheck) {
            return (
                <AppTemplate>
                    { isMobile ? (
                        <Drawer className="mobile-aside"
                                placement="left"
                                width="auto"
                                closable={false}
                                onClose={ this.isAside }
                                visible={ isMobileAside }>
                            <AsideContainer update={this.state.update} />
                        </Drawer>
                    ) : null }
                    <NotificationContainer />
                    {/* 헤더 */}
                    <HeaderContainer/>
                    {/* // 헤더 */}
                    <Layout>
                        { /* 사이드 메뉴*/}
                        { !isMobile ? <AsideContainer update={this.state.update} /> : null }
                        {/* // 사이드 메뉴 */}
                        <Layout>
                            <Content id="container">
                                {/* 컨텐츠 */}
                                { children }
                                {/* // 컨텐츠 */}
                            </Content>

                            {/* 하단 */}
                            <FooterContainer>
                            </FooterContainer>
                            {/* // 하단 */}

                        </Layout>
                        
                    </Layout>
                </AppTemplate>
            )
        } else {
            return (
                <AppTemplate className="is-not-Layout">
                    <Layout>
                        <Content id="container">
                            {/* 컨텐츠 */}
                            {children}
                            {/* // 컨텐츠 */}
                        </Content>
                    </Layout>
                </AppTemplate>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isMobile: state.device.isMobile,
        isMobileAside: state.appTemplate.isMobileAside,
        collapsed: state.appTemplate.collapsed,
        openKeys: state.appTemplate.openKeys,
        isLayout: state.appTemplate.isLayout,
        menuSelectedKey: state.appTemplate.menuSelectedKey
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AppTemplateActions: bindActionCreators(appTemplateActions, dispatch),
        DeviceActions: bindActionCreators(deviceActions, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(AppTemplateContainer));
