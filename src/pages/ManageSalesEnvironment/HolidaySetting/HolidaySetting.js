import React from 'react';

// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const HolidaySetting = ({match}) => {
    return (
        <ContentContainer>
            {/* 타이틀 */}
            <PageTitle title="공휴일 설정" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default HolidaySetting;