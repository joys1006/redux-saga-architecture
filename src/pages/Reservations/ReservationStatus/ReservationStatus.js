import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';

// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const ReservationStatus = ({match}) => {
    return (
        <ContentContainer id="ReservationStatus">
            {/* 타이틀 */}
            <PageTitle title="예약현황" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default ReservationStatus;