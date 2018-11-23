/**
 * @author Has
 * @reg_date 2018-10-08
 * @summary App 에 대한 컴포넌트 JS
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Layout Container
import AppTemplateContainer from 'containers/CommonContainer/AppTemplateContainer';
// routes
import { Routes } from 'routes';

class App extends Component {
    render () {
        return (
            <AppTemplateContainer>
                <Routes />
            </AppTemplateContainer>
        );
    }
}

export default withRouter(App);