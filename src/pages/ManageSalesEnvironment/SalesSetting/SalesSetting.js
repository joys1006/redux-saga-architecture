import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const SalesSetting = ({match}) => {
    return (
        <ContentContainer id="SalesSetting">
            {/* 타이틀 */}
            <PageTitle title="판매설정" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default SalesSetting;