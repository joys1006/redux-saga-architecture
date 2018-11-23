/**
 * @author Has
 * @reg_date 2018-11-02
 * @summary Home
 */
import React, { Component } from 'react';

// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTitle from 'components/PagePackages/PageTitle/PageTitle';
import PageCard from 'components/PagePackages/PageCard/PageCard';
import PagePanel from 'components/PagePackages/PagePanel/PagePanel';
// antd
import { Button } from 'antd';

class Home extends Component {
    constructor (props) {
        super(props);
        this.dialogActiveTestHandler = this.dialogActiveTestHandler.bind(this);
    }

    dialogActiveTestHandler () {
        const { dialog } = this.props;
        const options = {
            modalType: 'confirm',
            options: {
                title: 'Are you sure delete this task?',
                content: 'Some descriptions',
                okText: 'Yes',
                cancelText: 'No',
                okType: 'normal',
                maskClosable: true,
                okButtonProps: {
                },
                cancelButtonProps: {
                  loading: false,
                },
                onOk() {
                  console.log('OK');
                },
                onCancel() {
                  console.log('Cancel');
                },
            },
        }
        dialog.open(options);
    }

    render() {
        return (
            <ContentContainer id="Home">

                {/* 타이틀 */}
                <PageTitle title="홈" />
                {/* // 타이틀 */}
                <Button type="button"
                        onClick={ this.dialogActiveTestHandler }>
                    테스트
                </Button>
                <PageCard loading={ false }>
                    test
                </PageCard>
                    
            </ContentContainer>
        );
    }
};

Home = PagePanel()(Home);

export default Home;