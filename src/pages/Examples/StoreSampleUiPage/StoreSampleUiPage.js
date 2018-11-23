import React from 'react';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';

// UI Container
import CounterContainer from 'containers/StoreExampleContainer/CounterContainer';

const StoreSampleUi = ({match}) => {
    return (
        <ContentContainer>
            <CounterContainer />
        </ContentContainer>
    )
}

export default StoreSampleUi;