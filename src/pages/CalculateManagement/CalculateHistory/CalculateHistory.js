import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const CalculateHistory = ({match}) => {
    return (
        <ContentContainer id="CalculateHistory">
            {/* 타이틀 */}
            <PageTitle title="정산내역" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default CalculateHistory;