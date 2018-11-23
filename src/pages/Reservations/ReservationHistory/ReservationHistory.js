import React, { Component } from 'react';
// Antd
import { Input } from 'antd';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';

const Search = Input.Search;

class ReservationHistory extends Component {
    
    constructor (props) {
        super(props);
        this.searchHandler = this.searchHandler.bind(this);
    }

    // 검색 이벤트
    searchHandler (value) {
        console.log(value);
    }

    render() {
        return (
            <ContentContainer>
                {/* 타이틀 */}
                <PageTitle title="예약내역">
                    <Search className="page-search-widget"
                            placeholder="이름/예약번호/안심번호"
                            onSearch={this.searchHandler}
                            enterButton/>
                </PageTitle>
                {/* // 타이틀 */}
            </ContentContainer>
        )
    }
}

export default ReservationHistory;