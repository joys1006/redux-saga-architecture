import React, { Component } from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// antd
import { Form, Input, Button } from 'antd';
// Layout Container
import ContentContainer from 'containers/CommonContainer/LayoutContainer/ContentContainer';
// PagePackages Components
import PageTabs from 'components/PagePackages/PageTabs/PageTabs';
import PagePanel from 'components/PagePackages/PagePanel/PagePanel';
// components
import StickyHeader from 'components/Common/StickyHeader/StickyHeader';

const FormPanel = Form;
const FormItem = Form.Item;

export class FindIdResult extends Component {

    state = {
        isCount: false,
    }

    // 폼 서브밋 이벤트
    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.props;
        const { validateFields } = form;
        let check = true;
        let error = null;

        validateFields({ force: true }, (err, values) => {
            if (!err) {
                error = null;
                console.log('Received values of form: ', values);
            } else {
                error = err;
                check = false;
            }
        });

        if (check) {
            console.log('통과');
            // const payload = {
            //     u_id: getFieldValue('user-id'),
            //     u_pw: getFieldValue('user-password'),
            // };
            // this.setLogin(payload);
        } else {
            const errorKeys = Object.keys(error);
            const fieldEl = document.getElementById(errorKeys[0]);
            fieldEl.focus();
        }
    }

    getCertification = () => {
        this.setState({
            ...this.state,
            isCount: true,
        });
    }

    render() {
        const { form, validations } = this.props;
        const { getFieldValue } = form;
        const { getPattern, setRules } = validations;
        return (
            <ContentContainer id="FindId"
                              isLayout={ false }>

                <StickyHeader />

                {/* 페이지 탭 */}
                <PageTabs>
                    <NavLink to="/find-id/user-check" className="is-active">아이디 찾기</NavLink>
                    <NavLink to="/find-password/id-check">비밀번호 찾기</NavLink>
                </PageTabs>
                {/* // 페이지 탭 */}

                {/* 컨텐츠 */}
                <div className="content">

                    <div className="text-box">
                        <h3>아이디</h3>
                        <div className="text-desc">
                            <p>고객님의 정보와 일치하는 아이디 목록입니다.</p>
                        </div>
                    </div>

                    {/* 아이디 찾기 폼 */}
                    <div className="form-wrap">
                        <FormPanel className="form-widget"
                                   onSubmit={ this.handleSubmit }>
                            <div className="input-box-wrap">
                                <div className="item-box">
                                    <FormItem label="이름">
                                        {
                                            form.getFieldDecorator(
                                                'user-name',
                                                {
                                                    rules: [
                                                        { 
                                                            required: true,
                                                            pattern: getPattern('uname'),
                                                            message: setRules('uname', getFieldValue('user-name')),
                                                        }
                                                    ],
                                                }
                                            )(
                                                <Input type="text"
                                                       name="user_name"
                                                       placeholder="대표자명을 입력해주세요." />
                                            )
                                        }
                                    </FormItem>
                                </div>
                            </div>
                            <div className="submit-wrap">
                                <Button type="primary"
                                        htmlType="submit"
                                        className="btn-50-m1 submit-button">
                                    확인
                                </Button>
                            </div>
                        </FormPanel>
                    </div>
                    {/* // 아이디 찾기 폼 */}

                </div>
                {/* // 컨텐츠 */}

            </ContentContainer>
        );
    }
}  

FindIdResult = PagePanel()(FindIdResult);
FindIdResult = Form.create()(FindIdResult);

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(FindIdResult));
