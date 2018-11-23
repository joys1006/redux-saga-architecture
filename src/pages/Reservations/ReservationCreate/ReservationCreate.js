import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';

// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const ReservationCreate = ({match}) => {
    return (
        <ContentContainer id="ReservationCreate">
            {/* 타이틀 */}
            <PageTitle title="예약등록" />
            {/* // 타이틀 */}
        </ContentContainer>
    )
}

export default ReservationCreate;