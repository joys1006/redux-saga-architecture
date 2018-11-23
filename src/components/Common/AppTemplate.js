/**
 * @author Has
 * @reg_date 2018-10-08
 * @summary AppContainer에 대한 컴포넌트 JS
 */

import React from 'react';

// components
import { Layout } from 'antd';

const AppTemplate = ({ className, children }) => {
    return (
        <Layout id="app"
                className={className}>
            {children}
        </Layout>
    );
}

export default AppTemplate;
