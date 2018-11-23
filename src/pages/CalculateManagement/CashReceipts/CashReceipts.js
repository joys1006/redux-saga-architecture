import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const CashReceipts = ({match}) => {
    return (
        <ContentContainer id="CashReceipts">
            {/* 타이틀 */}
            <PageTitle title="현금영수증" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default CashReceipts;