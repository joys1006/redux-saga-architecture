import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const PopupSetting = ({match}) => {
    return (
        <ContentContainer id="PopupSetting">
            {/* 타이틀 */}
            <PageTitle title="팝업설정" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default PopupSetting;