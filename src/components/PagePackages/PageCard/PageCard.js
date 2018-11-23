/**
 * @author Has
 * @reg_date 2018-11-02
 * @summary PageCard
 */

import React from 'react';

import { Card } from 'antd';

const PageCard = ({ loading, children }) => {
    return (
        <Card loading={ true }>
            { children }
        </Card>
    )
}

export default PageCard;