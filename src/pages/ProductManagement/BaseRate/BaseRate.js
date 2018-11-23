import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const BaseRate = ({match}) => {
    return (
        <ContentContainer id="BaseRate">
            {/* 타이틀 */}
            <PageTitle title="기본요금" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default BaseRate;