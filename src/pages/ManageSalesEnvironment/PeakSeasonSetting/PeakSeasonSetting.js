import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const PeakSeasonSetting = ({match}) => {
    return (
        <ContentContainer id="PeakSeasonSetting">
            {/* 타이틀 */}
            <PageTitle title="성수기기간설정" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default PeakSeasonSetting;