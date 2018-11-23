/**
 * @author Has
 * @reg_date 2018-11-02
 * @summary PageTitle
 */

import React from 'react';

const PageTitle = ({ title, children }) => {
    return (
        <div className="title-widget">
            <h2>{title}</h2>
            <div className="title-right">
                { children }
            </div>
        </div>
    )
}

export default PageTitle;