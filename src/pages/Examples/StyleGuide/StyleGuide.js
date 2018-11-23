import React from 'react';

// Antd
import { Input, Button } from 'antd';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';

const StyleGuide = ({match}) => {
    return (
        <ContentContainer>
            <div>공통 스타일 가이드</div>
            <Button className="btn-50-m1"
                    type="primary"
                    disabled>btn-50-m1</Button>
            <Button className="btn-50-m2"
                    type="primary"
                    disabled>btn-50-m2</Button>
            <Button className="btn-50-s1"
                    type="primary">btn-50-s1</Button>
            <Button className="btn-50-s2"
                    type="primary">btn-50-s2</Button>
            <Button className="btn-40-m1"
                    type="primary">btn-40-m1</Button>
            <Button className="btn-40-m2"
                    type="primary">btn-40-m2</Button>
            <Button className="btn-40-s1"
                    type="primary">btn-40-s1</Button>
            <Button className="btn-40-s2"
                    type="primary">btn-40-s2</Button>

            <Input placeholder="인풋 스타일" />
        </ContentContainer>
    );
};


export default StyleGuide;