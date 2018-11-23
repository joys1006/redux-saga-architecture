import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const OptionList = ({match}) => {
    return (
        <ContentContainer id="OptionList">
            {/* 타이틀 */}
            <PageTitle title="옵션목록" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default OptionList;