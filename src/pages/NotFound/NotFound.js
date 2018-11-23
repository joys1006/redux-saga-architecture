import React from 'react';
import { withRouter } from 'react-router-dom';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// Antd
import { Button } from 'antd';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const NotFound = ({ history }) => {
    return (
        <ContentContainer id="NotFound"
                          isLayout={ false }>
            {/* 타이틀 */}
            <PageTitle title="404 NotFound">
            </PageTitle>
            {/* // 타이틀 */}
            <Button className="btn-50-m1"
                    type="primary"
                    onClick={
                        () => history.replace('/')
                    }>
                홈으로
            </Button>
        </ContentContainer>
    )
}

export default withRouter(NotFound);