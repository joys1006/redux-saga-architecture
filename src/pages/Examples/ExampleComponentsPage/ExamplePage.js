import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// UI Container
import TableContainer from 'containers/TableContainer/TableContainer';

const ExamplePage = ({match}) => {
    return (
        <ContentContainer>
            <TableContainer />
        </ContentContainer>
    )
}

export default ExamplePage;