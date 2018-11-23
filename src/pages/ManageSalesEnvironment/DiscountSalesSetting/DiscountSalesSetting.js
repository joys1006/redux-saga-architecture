import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const DiscountSalesSetting = ({match}) => {
    return (
        <ContentContainer id="DiscountSalesSetting">
            {/* 타이틀 */}
            <PageTitle title="할인판매설정" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default DiscountSalesSetting;