import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const RoomList = ({match}) => {
    return (
        <ContentContainer id="RoomList">
            {/* 타이틀 */}
            <PageTitle title="객실목록" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default RoomList;