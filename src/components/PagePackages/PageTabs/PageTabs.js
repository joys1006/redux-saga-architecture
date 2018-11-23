import React from 'react';

const PageTabs = ({ children }) => {
    return (
        <div className="page-tabs-wrap">
            {/* 페이지 탭 */}
            <div className="page-tabs-inner">
                {children}
            </div>
            {/* // 페이지 탭 */}
        </div>
    )
}

export default PageTabs;